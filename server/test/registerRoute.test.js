import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import { beforeEach, test } from 'mocha';

import server from '../server.js';

import testData from './mockData/testData.js';
const testUser = testData.user;

import User from '../models/user.model.js';

chai.use(chaiHttp);

describe(`/register route tests`, () => {

    beforeEach(async () => {
        await User.deleteMany()
            .then(() => console.log(`User collection cleared`))
            .catch(error => {
                console.log(`Error clearing users collection`);
                throw new Error();
            });

        await User.insertMany(testUser)
            .then(() => console.log(`Database populated with test users`))
            .catch(error => {
                console.log(`Error inserting into users collection: ${error.message}`);
                throw new Error();
            });
    });


    describe(`POST /register tests`, () => {

        test(`should add the user to the database (new user details don't conflict with already registered user)`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send({ newUser: testData.validNewUser });

            const returnedUser = await User.findOne({ email: testData.validNewUser.email }).exec();
            expect(returnedUser).to.be.ok;
        });

        test(`should provide a success message (new user details don't conflict with already registered user)`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send({ newUser: testData.validNewUser });

            expect(res.body.message).to.equal(`Sign up successful`);
        });


        test(`should not add the user to the database (username conflicts with existing user)`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send({ newUser: testData.invalidUsername });

            const returnedUser = await User.findOne({ email: testData.invalidUsername.email }).exec();
            expect(returnedUser).to.be.null;
        });


        test(`should not add the user to the database (email conflicts with existing user)`, async () => {
            const res = await chai.request(server)
                .post(`/register`)
                .send({ newUser: testData.invalidEmail });

            const returnedUser = await User.findOne({ email: testData.invalidEmail.username }).exec();
            expect(returnedUser).to.be.null;
        });

    });

});