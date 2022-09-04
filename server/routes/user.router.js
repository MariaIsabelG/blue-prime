const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', async (req, res) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const phonenumber = req.body.phone_number;
  const company = req.body.company;
  const email = req.body.email;
  const statelist = Number(req.body.state_list);

  const connection = await pool.connect();

  try{
    await connection.query('BEGIN');
    const queryText = `INSERT INTO "user" (username, password, first_name, last_name, phone_number, company, email)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
    const result = await connection.query(queryText, [username, password, firstname, lastname, phonenumber, company, email])
    const agentId = result.rows[0].id;

    // for(let i=0; i<statelist.legnth; i++){

      const queryTextStates = `INSERT INTO "state_user" ("state_id","user_id") VALUES ($1, $2);`;
      await connection.query(queryTextStates, [statelist, agentId]);
      await connection.query('COMMIT');
      res.sendStatus(200);
  }catch(error){
    await connection.query('ROLLBACK');
    console.log('Error in registering user', error);  
    res.sendStatus(500);
  }finally{
    connection.release();
  }
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/states', (req, res) => {
  const queryText = `SELECT * FROM "state" ORDER BY "name" ASC;`;
  pool.query( queryText )
  .then ( response =>{
    res.send( response.rows );
    console.log( response.rows ); 
    }).catch((error) => {
      console.log('Error getting states:', error);
      res.sendStatus(500);
    });
  });




module.exports = router;
