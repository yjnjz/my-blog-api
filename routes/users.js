const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* Create a new User (register). */
router.post('/', (req, res, next) => {
  if (!req.body.fields) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.fields.firstName,
      lastName: req.body.fields.lastName,
      email: req.body.fields.email,
      login: req.body.fields.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient.createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

module.exports = router;