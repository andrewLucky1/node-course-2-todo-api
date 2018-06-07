const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log(`Unable to connect to MongoDB server`);
    console.log(`Connected to MongoDB server`);

    // 📝  Document updating
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectId("5b18d47d757e881fad0063b8")
    // }, {
    //     $set: {
    //         age: 98
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(res => {
    //     console.log(res);
    // });

    // 📄 Changing document format
    // db.collection('Users').updateMany({}, {
    //     $rename: {
    //         "fullname": "full_name"
    //     }
    // }).then(res => {
    //     console.log(res);
    // });


    // ❌ 🗄  Field removing from a document
    // db.collection('Users').update({
    //     _id: new ObjectId("5b18d47d757e881fad0063b8")
    // }, {
    //     $unset: {
    //         name: 1
    //     }
    // }, {multi: false}).then(res => {
    //     console.log(res);
    // });

    // test one 🚀
    db.collection('Users').updateOne({
        _id: new ObjectId("5b18d47d757e881fad0063b8")
    }, {
        $set: {
            full_name: "Lisa Samiona"
        },
        $inc: {
            age: 1
        }
    }).then(res => {
        console.log(res);
    });

    // db.close();
});