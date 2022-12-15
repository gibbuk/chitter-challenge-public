import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post((req, res) => {
        const { username, password } = req.body;

        User.findOne({ username }, (err, user) => {
            if (user && password === user.password) {
                res.send({ message: `Login success`, user });
            }
            else {
                res.send({ message: `Details not found` });
            }
        });
    });

export { router as login };