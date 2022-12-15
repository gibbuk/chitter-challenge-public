import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post(async (req, res) => {
        const { name, username, email, password } = req.body.newUser;

        const usernameTaken = await User.findOne({ username: username }).exec();
        const emailTaken = await User.findOne({ email: email }).exec();

        if (usernameTaken) {
            res.send({ message: `Username already taken` });
        }
        else if (emailTaken) {
            res.send({ message: `Email already taken` });
        }
        else {
            const newUser = new User(req.body.newUser);
            newUser.save(err => {
                if (err) {
                    res.send({ message: err.message });
                }
                else {
                    res.send({ message: `Sign up successful` });
                };
            });
        };
    });

export { router as register };