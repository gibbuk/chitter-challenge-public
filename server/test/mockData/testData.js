const testData = {
    peeps: [
        {
            "username": "Dorothy",
            "realName": "Judy Garland",
            "content": "Toto, I've got a feeling we're not in Kansas anymore",
            "dateCreated": "2011-10-05T14:48:00.000Z"
        },
        {
            "username": "Rick",
            "realName": "Humphrey",
            "content": "Here's looking at you kid",
            "dateCreated": "2012-10-05T14:48:00.000Z"
        },
        {
            "username": "Obi",
            "realName": "Alec",
            "content": "May the force be with you!",
            "dateCreated": "2020-10-05T14:48:00.000Z"
        },
        {
            "username": "E.T.",
            "realName": "Pat",
            "content": "E.T. Phone Home.",
            "dateCreated": "2020-10-05T14:48:05.000Z"
        },
        {
            "username": "NathanJessup",
            "realName": "Jack",
            "content": "You can't handle the truth!",
            "dateCreated": "2020-10-05T14:55:00.000Z"
        },
        {
            "username": "Dave",
            "realName": "Keir",
            "content": "Open the pod bay doors, HAL.",
            "dateCreated": "2020-10-05T15:48:00.000Z"
        }
    ],
    testPeep: {
        "username": "Testusername",
        "realName": "Test User",
        "content": "This is a test peep.",
        "dateCreated": "2021-10-05T15:48:00.000Z"
    },
    user: {
        "name": "Test User",
        "username": "Test",
        "email": "test@test.com",
        "password": "password"
    },
    invalidUsername: {
        "name": "Test User",
        "username": "Test",
        "email": "invalidUsername@test.com",
        "password": "password"
    },
    invalidEmail: {
        "name": "Test User",
        "username": "invalidEmail",
        "email": "test@test.com",
        "password": "password"
    },
    validNewUser: {
        "name": "Valid new user",
        "username": "ValidNewUser",
        "email": "validnewuser@test.com",
        "password": "password"
    }
}

export default testData;