const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(`Unable to connect to MongoDB server`);
    console.log(`Connected to MongoDB server`);


    // 📨  Inserting into document
    // db.collection('Users').insertOne({
    //     name: 'Inna Chernetska',
    //     age: 22,
    //     location: 'Kirovograd'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log(`Unable to insert user`, err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // })

    // 🗑  Fetching from a collection
    // db.collection('Users').find({
    //     _id: new ObjectID('')
    // }).toArray().then(count => {
    //     console.log(`Todos count: ${ count }`);
    // }, err => {
    //     console.log(`Unable to fatch todos`, err);
    // });
    db.collection('Users').find({
        name: 'Inna Chernetska'
    }).count().then((err, docs) => {
        if (err) console.log(err);
        else console.log(docs);
    });

    // db.close();
});