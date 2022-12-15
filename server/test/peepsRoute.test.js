import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { beforeEach, it } from 'mocha';

import server from '../server.js';

import testData from './mockData/testData.js';
const peeps = testData.peeps;
const testPeep = testData.testPeep;
const testUser = testData.user;
const invalidPasswordUser = testData.invalidPasswordUser;

import Peep from '../models/peep.model.js';

chai.use(chaiHttp);

describe(`/peeps route tests`, () => {

    beforeEach(async () => {
        await Peep.deleteMany()
            .then(() => console.log(`peeps collection cleared`))
            .catch(error => {
                console.log(`Error clearing peeps collection`);
                throw new Error();
            });

        await Peep.insertMany(peeps)
            .then(() => console.log(`Database populated with test peeps`))
            .catch(error => {
                console.log(`Error inserting into peeps collection: ${error.message}`);
                throw new Error();
            });
    });

    describe(`GET - '/peeps'`, () => {

        it(`should receive a response with status code 200`, async () => {
            const res = await chai.request(server)
                .get(`/peeps`)
                .send();

            expect(res).to.have.status(200);
        });
    });

    describe(`POST - '/peeps'`, () => {

        it(`Should receive a response with an error message (no valid user supplied)`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ testPeep });

            expect(res.body.message).to.equal('Error: no valid user');
        });

        it(`Should not have added peep to the database (no valid user supplied)`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ peep: testPeep });

            const returnedPeep = await Peep.findOne({ content: testPeep.content }).exec();
            expect(returnedPeep).to.be.null;

        });

        it(`should receive a response with an error message (user supplied but not in the database)`, async () => {

            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ user: invalidPasswordUser, peep: testPeep });

            expect(res.body.message).to.equal('Error: no valid user');
        });

        it(`should not add a peep to the database (user supplied is not valid)`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ user: invalidPasswordUser, peep: testPeep });

            const returnedPeep = await Peep.findOne({ content: testPeep.content }).exec();
            expect(returnedPeep).to.be.null;

        });

        it(`should receive a response with an error message (no content supplied)`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ user: testUser });

            expect(res.body.message).to.equal(`Error: no content supplied`);
        })

        it(`Should receive a response with the peep attached`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ user: testUser, peep: testPeep });

            expect(res.body.peep).to.deep.include(testPeep);
        });

        it(`Should add the peep to the database`, async () => {
            const res = await chai.request(server)
                .post(`/peeps`)
                .send({ user: testUser, peep: testPeep });


            const returnedPeep = await Peep.findOne({ content: testPeep.content }).exec();
            expect(returnedPeep).to.be.ok;
        });

    });

});