import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;

async function handler(req, res) {
    if (req.method === 'POST') {
        // connect to MongoDB using the connection string
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        // select the database to use
        const db = client.db('meeva');

        // select the collection to interact with
        const collection = db.collection('customers');

        // insert the data received in the POST request into the collection
        const result = await collection.insertOne(req.body);

        //close the connection to the database
        client.close();

        //send a success response back to the client
        res.status(201).json({ message: 'Data submitted successfully!', result});
        
    } else {
        // handle error
        res.status(500).json({ message: 'Failed to submit data', error});
    }
    
}

export default handler;