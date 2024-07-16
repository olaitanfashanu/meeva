const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`);

module.exports = schema;
