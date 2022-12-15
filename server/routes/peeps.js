import express from 'express';

const router = express.Router();

import Peep from '../models/peep.model.js';
import User from '../models/user.model.js';

router.route(`/`)
    .get((req, res) => {
        Peep.find((err, peeps) => {
            err ? res.status(404).send(`Not found`) : res.json(peeps);
        });
    })
    .post((req, res) => {
        const suppliedUser = req.body.user;
        const peep = req.body.peep;

        if (!suppliedUser) { res.send({ message: `Error: no valid user` }) }
        else if (!peep) { res.send({ message: `Error: no content supplied` }) }
        else {
            User.findOne({ username: suppliedUser.username }, (err, user) => {
                if (user && suppliedUser.password === user.password) {
                    const peepToAdd = new Peep(peep);
                    peepToAdd.save(err => {
                        if (err) {
                            res.send({ message: err.message });
                        }
                        else {
                            res.send({ message: "Peep posted!", peep: peep });
                        }
                    })
                } else {
                    res.send({ message: `Error: no valid user` });
                }
            })
        }
    });

export { router as peeps };