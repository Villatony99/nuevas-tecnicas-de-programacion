const { MongoClient } = require('mongodb')
const DB_NAME = "clients"
const URL = "mongodb+srv://user:<12345>@modulo1.2jnfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var MongoConeccion = () => new Promise(async (resolve, reject) => {
    try {
        let client = new MongoClient(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        await client.connect()
        resolve(cliente.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
})

module.exports.MongoConeccion=MongoConeccion