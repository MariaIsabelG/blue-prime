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

router.put('/agents/:id', (req, res) => {
	if (req.user) {
		const id = req.params.id;
		const { firstName, lastName, company, phoneNumber, email } = req.body;
		const queryText =
			'UPDATE "user" SET first_name = $1, last_name = $2, company = $3, phone_number = $4, email = $5 WHERE id = $6;';
		pool
			.query(queryText, [firstName, lastName, company, phoneNumber, email, id])
			.then((result) => {
				res.sendStatus(200);
			})
			.catch((error) => {
				console.log('ERROR UPDATING IN /agents', error);
				res.sendStatus(500);
			});
	}
});

router.delete('/agents/:id', (req, res) => {
	if (req.user) {
		const id = req.params.id;
		const queryText = 'DELETE FROM "user" WHERE id = $1;';
		pool
			.query(queryText, [id])
			.then((result) => {
				res.sendStatus(200);
			})
			.catch((error) => {
				console.log('ERROR DELETING IN /agents', error);
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

router.put('/clients/:id', (req, res) => {
	if (req.user) {
		const id = req.params.id;
		const { firstName, lastName, state, phoneNumber, email, zip } = req.body;
		const queryText =
			'UPDATE "client" SET first_name = $1, last_name = $2, state = $3, phone_number = $4, email = $5, zip_code = $6 WHERE id = $7;';
		pool
			.query(queryText, [firstName, lastName, state, phoneNumber, email, zip, id])
			.then((result) => {
				res.sendStatus(200);
			})
			.catch((error) => {
				console.log('ERROR UPDATING IN /clients', error);
				res.sendStatus(500);
			});
	}
});

router.delete('/clients/:id', (req, res) => {
	if (req.user) {
		const id = req.params.id;
		const queryText = 'DELETE FROM "client" WHERE id = $1;';
		pool
			.query(queryText, [id])
			.then((result) => {
				res.sendStatus(200);
			})
			.catch((error) => {
				console.log('ERROR DELETING IN /client', error);
				res.sendStatus(500);
			});
	}
});

module.exports = router;
