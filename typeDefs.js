const {gql} = require('apollo-server');

const schema = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Query {
        me: User
    }
`

module.exports = schema;
