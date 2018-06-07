const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(`Unable to connect to MongoDB server`);
    console.log(`Connected to MongoDB server`);
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) return console.log(`Unable to insert todo`); 
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });
    // 📨  insert new doc into Users (name, age, location )
    db.collection('Todos').insertMany([
        {
            name: 'Wash the car',
            completed: false
        },
        {
            text: 'Drop the junk',
            completed: false
        },
        {
            text: 'Buy the water',
            completed: false
        }
    ], (err, res) => {
        if (err) {
            return console.log(`Unable to insert user`, err);
        }
        console.log(res.ops[0]);
    });

    db.close();
});