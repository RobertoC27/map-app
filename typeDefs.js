const {gql} = require('apollo-server');

const schema = gql`
    type User {
        _id: ID
        name: String
        email: String
        picture: String
    }

    type Pin {
        _id: ID
        createdAt: String
        title: String
        content: String
        image: String
        latitude: Float
        longitude: Float
        author: User
        comments: [Comment]
    }

    type Comment {
        text: String
        createdAt: String
        author: User
    }

    type Query {
        me: User
    }
`

module.exports = schema;
