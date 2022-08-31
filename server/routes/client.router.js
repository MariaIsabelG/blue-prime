const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


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



module.exports = router;