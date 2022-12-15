import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import { beforeEach, it } from "mocha";

import server from "../server.js";
import testData from "./mockData/testData.js";
const testUser = testData.user;

import User from "../models/user.model.js";

chai.use(chaiHttp);

describe(`/login route tests`, () => {

    beforeEach(async () => {
        await User.deleteMany()
            .then(() => console.log("users collection cleared"))
            .catch(error => {
                console.log(`Error clearing user collection: ${error.message}`);
                throw new Error();
            });

        await User.insertMany([testUser])
            .then(() => console.log(`Database - test users added`))
            .catch(error => {
                console.log(`Error inserting users into collection: ${error.message}`);
                throw new Error();
            });
    });

    it(`should receive no user when no user with the username is present in the database`, async () => {
        const res = await chai.request(server)
            .post(`/login`)
            .send({
                username: `notauser`,
                password: testUser.password
            });
        expect(res.body.user).to.be.undefined;

    });

    it(`should receive no user when the wrong password is provided`, async () => {
        const res = await chai.request(server)
            .post(`/login`)
            .send({
                username: testUser.username,
                password: `wrongpassword`
            });

        expect(res.body.user).to.be.undefined;
    });

    it(`should receive a user when a correct user is provided`, async () => {
        const res = await chai.request(server)
            .post(`/login`)
            .send({
                username: testUser.username,
                password: testUser.password
            });

        expect(res.body.user).to.deep.include(testUser);
    });

});


