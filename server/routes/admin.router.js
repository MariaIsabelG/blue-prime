const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/agents', (req, res) => {
	if (req.user) {
		const queryText =
			'SELECT id, first_name, last_name, company, email, phone_number FROM "user" WHERE access_level = 2;';
		pool
			.query(queryText)
			.then((result) => {
				res.send(result.rows);
			})
			.catch((error) => {
				console.log('ERROR GETTING IN /agents', error);
				res.sendStatus(500);
			});
	}
});

router.get('/clients', (req, res) => {
	if (req.user) {
		const queryText = 'SELECT * FROM "client";';
		pool
			.query(queryText)
			.then((result) => {
				res.send(result.rows);
			})
			.catch((error) => {
				console.log('ERROR GETTING IN /clients', error);
				res.sendStatus(500);
			});
	}
});

module.exports = router;