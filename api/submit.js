import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri); // connect to MongoDB using the connection string

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        try {
            await client.connect();
            const database = client.db('meeva'); // select the database to use
            const collection = database.collection('customers'); // select the collection to interact with
            const result = await collection.insertOne(formData); // insert the data received in the POST request into the collection

            res.status(200).json({ message: 'Data submitted successfully!', result}); //send a success response back to the client
        } catch (error) {
            res.status(500).json({ message: 'Failed to submit data', error});
        } finally {
            await client.close(); //close the connection to the database
        }   
        
    } else {
        res.status(405).json({ message: 'Not allowed'});   
    }
    
}

