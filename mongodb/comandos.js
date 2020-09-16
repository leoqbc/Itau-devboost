db.createCollection("suacollection")

// ou

db.hotels.insertOne({
    nome: "teste",
    sobrenome: "teste"
}) // já cria collection e addiciona um documento

db.clientes.insertOne({
    _id: UUID(),
    nome: "teste",
    sobrenome: "teste"
}) // com UUID

db.clientes.insertMany([
    { nome: "Leo", email: "leo@gmail.com" },
    { nome: "Ana", email: "ana@gmail.com" }
]);

db.clientes.createIndex( { nome: "text", email: "text" } )

db.clientes.find({
    $text: {
        $search: "Pedro pedrada"
    }
})

// retorna todos os registros
db.hotels.find() // retorna todas collections

db.hotels.find({
    _id: ObjectId('234234235235')
}) // retorna uma collection

db.hotels.find({
    campos: "valor"
})

db.hotels.find({
    campos: /regexp/
})

db.hotels.find({
    $or: [
        { campo: 123 },
        { campo: 456 }
    ]
})

// altera um campo, { filtro }, { $set: campo: "valor" }
db.hotels.updateOne({ campo: "teste" }, { $set: { campo: "novo valor" } })

// remove um campo
db.hotels.updateOne({ campo: "teste" }, { $unset: { campo: "" } })
db.hotels.updateMany({ campo: "valor" })

db.hotels.deleteOne({ campo: "valor" })

db.hotels.deleteMany({ campo: "valor" })