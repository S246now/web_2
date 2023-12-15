import { MongoClient } from 'mongodb';

async function LoginHandler(req, res) {

  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(
      'mongodb+srv://crud:crud123@web.gq8l24z.mongodb.net/?retryWrites=true&w=majority'
    );

    const db = client.db('core');
    const collection = db.collection('student');

    // Find user with the given email
    const user = await collection.findOne({ email });

    if (!user || user.password !== password) {
      // If user not found or password is incorrect, return an error
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If the credentials are correct, return a success message
    return res.status(200).json({ message: 'Login successful' });
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }

  client.close();
}

export default LoginHandler;
