const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const id = user.id 
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;