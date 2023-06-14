const express = require("express");
const signupModal = require("../Schema/signupSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config()
const SC_KEY=process.env.SC_KEY;

router.post("/login", (req, res) => {
  signupModal
    .find({ email: req.body.email })
    .then((data) => {
      if (!data.length) {
        res.status(400).send("User doesn't exists!");
        console.log(data.length);
      } else {
        bcrypt
          .compare(req.body.password, data[0].password)
          .then(function (result) {
            if (result) {
              const authToken = jwt.sign(data[0].email,SC_KEY);
              res.status(200).send({ authToken });
            } else {
              res.status(400).send("Incorrect password");
            }
          });
        console.log(data.length);
      }
    })
    .catch((err) => {
      console.error('Error when finding user for login:', err);
      res.status(400).send(err);
    });
});

router.post("/signup", (req, res) => {
  console.log('Signup request received. Request body:', req.body);
  signupModal.find({ email: req.body.email })
    .then((data) => {
      console.log('User search complete:', data);
      if (data.length) {
        res.status(400).send("User already exists!");
      } else {
        const newUser = new signupModal({ ...req.body });
        console.log('Creating new user:', newUser);
        bcrypt
          .hash(req.body.password, saltRounds)
          .then(function (hash) {
            console.log('Password hashed successfully:', hash);
            newUser.password = hash;
            newUser.cpassword = hash;
            newUser
              .save()
              .then((data) => {
                console.log('User saved successfully:', data);
                res.status(200).send(data);
              })
              .catch((err) => {
                console.error('Error when saving new user:', err);
                res.status(403).send(err);
              });
          })
          .catch((err) => {
            console.error('Error when hashing password:', err);
            res.status(404).send(err);
          });
      }
    })
    .catch((err) => {
      console.error('Error when finding user for signup:', err);
      res.status(400).send(err);
    });
});

module.exports = router;
