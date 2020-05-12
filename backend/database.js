const mongoose = require('mongoose');

const PATH = 'mongodb://localhost/heroes-app';

mongoose.connect(PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then( db => console.log('DB is connected') )
  .catch( err => console.log(err) );

module.exports = mongoose;