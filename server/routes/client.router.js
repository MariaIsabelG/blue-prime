const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET clients for a specific agent

router.post('/', (req, res) => {
    const info = req.body;

    console.log('New is `Client:',req.body);

    const addClient = `INSERT INTO "client" ("first_name", "last_name", "email","state","zip_code","phone_number","comments")
    VALUES ($1,$2,$3,$4,$5,$6,$7)`;

    pool.query (addClient, [info.firstName,info.lastName,info.email,info.state,info.zipCode,info.phoneNumber,info.comments])
    .then(result => {
        console.log ('returned ID:', result.rows);
        res.send(result.rows);
    }).catch (err => {
        console.log('ERROR: ADD router:', err);
        res.sendStatus(500)
    })

})

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
router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    let queryText = `SELECT * FROM "client" 
    JOIN "client_user" ON "client"."id" = "client_user"."client_id" 
    WHERE "client"."id" = ${id};`
    pool.query(queryText)
    .then(result => {
        res.send(result.rows)
    })
    .catch(error => {
        console.log('error getting a specific client', error)
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