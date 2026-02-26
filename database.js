// got to mongo db website 
// create a free Mo cluster 
// create a user 
// get the connection string 
// install mngo db compass
import { MongoClient, ObjectId } from "mongodb";
const url ="mongodb+srv://namaste:AcsTC2sf5Ny1qe6Q@namastenode.ndnjmam.mongodb.net/ "

const client = new MongoClient(url);

await client.connect();

const db = client.db("campus");
const users = db.collection("users");

await users.bulkWrite([
  {
    insertOne: {
      document: {
        _id: new ObjectId("67a1b2c3d4e5f6a7b8c9d0e1"),
        name: "Tyrion Lannister",
        email: "tyrion.lannister@example.com",
        password: "$2b$12$UREFwsRUoyF0CRqGNK0LzO0HM/jLhgUCNNIJ9RJAqMUQ74crlJ1Vu"
      }
    }
  },
  {
    updateOne: {
      filter: { name: "Ned Stark" },
      update: { $set: { email: "ned.stark.updated@example.com" } }
    }
  },
  {
    deleteOne: {
      filter: { _id: new ObjectId("67a1b2c3d4e5f6a7b8c9d0e1") }
    }
  }
]);
// async function main(){
//     await client.connect();
//     console.log('Connected successfully to the server')
//     const db = client.db(dbName);
//     const collection = db.collection('user');




// // const data = {
// //     firstname:"deepika",
// //     lastname:'padukone',
// //     city:"mumbai",
// //     phonenumber:"89898989899"
// // }

// const data = {
//     firstname:"ranvir",
//     lastname:"singh",
//     city:"mumbai",
//     phonenumber:"8786767589"
// }

// const insertResult = await collection.insertOne(data);
// console.log('Inserted documents =>', insertResult)

//     const findResult = await collection.find({}).toArray();
//     console.log('Found documents =>', findResult)

//     const countResult = await collection.countDocuments({})
//     console.log("Count of documents in the User collection =>",countResult)

// find all    

// const result = await collection.find({firstname:"deepika"}).count();
// console.log("result =>", result)

// return 'done.';
// }

// main()
// .then(console.log)
// .catch(console.log)
// .finally(()=> client.close())













