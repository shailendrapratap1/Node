// got to mongo db website 
// create a free Mo cluster 
// create a user 
// get the connection string 
// install mngo db compass
const { MongoClient } = require('mongodb');
const url ="mongodb+srv://namaste:AcsTC2sf5Ny1qe6Q@namastenode.ndnjmam.mongodb.net/ "

const client = new MongoClient(url);

const dbName = 'helloworld'
async function main(){
    await client.connect();
    console.log('Connected successfully to the server')
    const db = client.db(dbName);
    const collection = db.collection('user');




// const data = {
//     firstname:"deepika",
//     lastname:'padukone',
//     city:"mumbai",
//     phonenumber:"89898989899"
// }

const data = {
    firstname:"ranvir",
    lastname:"singh",
    city:"mumbai",
    phonenumber:"8786767589"
}

const insertResult = await collection.insertOne(data);
console.log('Inserted documents =>', insertResult)

//     const findResult = await collection.find({}).toArray();
//     console.log('Found documents =>', findResult)

//     const countResult = await collection.countDocuments({})
//     console.log("Count of documents in the User collection =>",countResult)

// find all    

const result = await collection.find({firstname:"deepika"}).count();
console.log("result =>", result)

return 'done.';
}

main()
.then(console.log)
.catch(console.log)
.finally(()=> client.close())