const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://Mitranikhil33:Babul%40123%4033@ac-50g4ttb-shard-00-00.wo8qohn.mongodb.net:27017,ac-50g4ttb-shard-00-01.wo8qohn.mongodb.net:27017,ac-50g4ttb-shard-00-02.wo8qohn.mongodb.net:27017/microflix?ssl=true&replicaSet=atlas-5r5g6m-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Database connection error:', error.message);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
