
const user = {
    _id: "1",
    name: "Roberto",
    email: "roberto@prueba.com",
    picture: "https://pictures.com/65s54Scafs"
}


module.exports = {
    Query: {
        me: () => user
    }
}
