const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(`Unable to connect to MongoDB server`);
    console.log(`Connected to MongoDB server`);


    // ❌  1️⃣  delete document
    // db.collection('Todos').deleteOne({
    //     text: 'Buy the water'
    // }).then(res => {
    //     console.log(res);
    // });

    // ❌  🎳  delete Many docs
    // db.collection('Todos').deleteMany({
    // text: 'some pattern'
    // }).then((res) => {
    //     console.log(res);
    // });


    // 🔍 Find 1️⃣ and ❌ delete
    // db.collection('Todos').findOneAndDelete({
    //     _id: new ObjectId("5b18ead502d38033c89f7a5b")
    // }).then(res => {
    //     console.log(res);
    // });

    // db.close();
});