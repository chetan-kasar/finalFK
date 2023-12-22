// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kasarschetan1122:Yhcs4f5RBWwKqmU2@cluster13.x1rw8bv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors(
    {
        origin:["https://finalfk-frontend.vercel.app/"],
        methods:["POST","GET"],
        credentials:true
    }
));

app.post('/add', async (req, res) => {

    const database = client.db("mydb2");
    const mycollection = database.collection("mycollection");
    const result = await mycollection.insertOne(req.body.userData);
    console.log(req.body.userData);

    // console.log(global.imageName);

    //res.json({ message: 'Data received on the server' });
});

app.post('/api/username', (req, res) => {
  console.log('Received username:', req.body.userData.username);
  res.json({ message: 'Username received on the server' });
});

app.listen(3001, () => {
  console.log("Server running");
});
