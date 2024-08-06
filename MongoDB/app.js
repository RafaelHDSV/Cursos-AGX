const { MongoClient, ObjectId } = require('mongodb');
const uri = require('./atlas_uri');

console.log(`Connection String: ${uri}`);

const client = new MongoClient(uri);

const dbname = 'bank';
const collection_name = 'accounts';

const accountsCollection = client.db(dbname).collection(collection_name);

// conexão na database
const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log(`Connected to the ${dbname} database`);
	} catch (err) {
		console.error(`Error connecting to the database: ${err}`);
	}
};

// insertOne()
const sampleAccount = {
	account_holder: 'Linus Torvalds',
	account_id: 'MDB829001337',
	account_type: 'checking',
	balance: 50352434,
	last_updated: new Date(),
};

// insertMany()
const sampleAccounts = [
	{
		account_id: 'MDB011235813',
		account_holder: 'Ada Lovelace',
		account_type: 'checkking',
		balance: 60218,
	},
	{
		account_id: 'MDB829000001',
		account_holder: 'Muhammad ibn Musa al-Khwarizmi',
		account_type: 'savings',
		balance: 267914296,
	},
];

// find()
const documentToFind = { balance: { $gt: 4700 } };

// updateOne() e updateMany()
const documentToUpdate = { _id: '66a7a1a0309285074743de7f' };
const update = { $inc: { balance: 100 } };

// deleteOne() e deleteMany()
const documentToDelete = { _id: '66a7a1a0309285074743de7f' };
const documentsToDelete = { balance: { $lt: 500 } };

const main = async () => {
	try {
		await connectToDatabase();
		let result = await accountsCollection.deleteMany(documentsToDelete);
		(await result.modifiedCount) === 1
			? console.log('Deleted one document')
			: console.log('No document deleted');
	} catch (err) {
		console.error(`Error: ${err}`);
	} finally {
		await client.close();
	}
};

main();
