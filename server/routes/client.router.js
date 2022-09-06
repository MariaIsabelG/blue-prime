const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET clients for a specific agent

// router.post('/', (req, res) => {
//     const info = req.body;

//     console.log('New is `Client:',req.body);

//     const addClient = `INSERT INTO "client" ("first_name", "last_name", "email","state","zip_code","phone_number","comments")
//     VALUES ($1,$2,$3,$4,$5,$6,$7)`;

//     pool.query (addClient, [info.firstName,info.lastName,info.email,info.state,info.zipCode,info.phoneNumber,info.comments])
//     .then(result => {
//         console.log ('returned ID:', result.rows);
//         res.send(result.rows);
//     }).catch (err => {
//         console.log('ERROR: ADD router:', err);
//         res.sendStatus(500)
//     })

// })

router.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber, email, zipCode, state, comments } = req.body;
    
    const connection = await pool.connect();
    try {

        await connection.query('BEGIN');
        
        const addClient = `INSERT INTO "client" ("first_name", "last_name", "email","state","zip_code","phone_number","comments")
        VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "id"`;

        const result = await connection.query(addClient, [firstName, lastName, email , state, zipCode, phoneNumber, comments])
        const clientId = result.rows[0].id;
        console.log('client id:', clientId);

        const selectAgent = `SELECT "user".id
        FROM state_user 
        JOIN "user" ON "user".id = state_user.user_id 
        JOIN state ON state.id = state_user.state_id 
        WHERE state.id = $1 
        ORDER BY "user".last_lead 
        DESC LIMIT 3;`

        const agentResult = await connection.query(selectAgent, [state])
        console.log('agent id:', agentResult.rows );

        const clientAgent = `INSERT INTO "client_user" ("client_id", "user_id", "matched_date") VALUES ($1, $2, now()); `

        const updateAgent = `UPDATE "user" SET "last_lead" = now()
        FROM "client_user" 
        WHERE "user"."id" = $1;`

        const agentArray = agentResult.rows;

        const adminId = 1;
        if (agentArray.length < 1){
            connection.query(clientAgent, [clientId, adminId ])
        } else {
        for (let i = 0; i < agentArray.length; i++){
            console.log('loop console.log:', agentArray[i]);
            connection.query(clientAgent, [clientId, agentArray[i].id])
            connection.query(updateAgent, [agentArray[i].id])
        }
    }
        connection.query('COMMIT');
		res.sendStatus(200);

    }
    
    catch (error){
        await connection.query('ROLLBACK');
		console.log('Error in registering user', error);
		res.sendStatus(500);
	} finally {
		connection.release();
	}

});






router.get('/:id', (req, res) => {
    const id = req.params.id
    let queryText = `SELECT * FROM "client" 
    JOIN "client_user" ON "client"."id" = "client_user"."client_id" 
    WHERE "client_user"."user_id" = ${id};`
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting clients', error)
        res.sendStatus(500);
    })
});


//GET a specific client
// router.get('/details/:id', (req, res) => {
//     const id = req.params.id;
//     let queryText = `SELECT * FROM "client" 
//     JOIN "client_user" ON "client"."id" = "client_user"."client_id" 
//     WHERE "client"."id" = ${id};`
//     pool.query(queryText)
//     .then(result => {
//         res.send(result.rows)
//     })
//     .catch(error => {
//         console.log('error getting a specific client', error)
//         res.sendStatus(500);
//     }) 
// })

router.put('/:id', (req, res) => {

    console.log('req.params', req.params);
    console.log('req.body', req.body)

    const queryText = `UPDATE "client_user" SET "status" = $1 WHERE "client_user"."client_id" = $2;`
    pool.query(queryText, [req.body.status, req.params.id])
        .then((result => {
            res.sendStatus(200);
        })).catch(error => {
            console.log('error updating client status', error);
            res.sendStatus(500);
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


module.exports = router;