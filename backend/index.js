const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const { mongoose } = require('./database');

//settings
app.set( 'PORT', 3000 );
app.use( morgan('dev') );
app.use( express.json() );
app.use( cors() );

//routes
app.use('/api/heroes', require('./routes/heroes.routes') );

//Starting the server
app.listen(app.get('PORT'), () =>{
  console.log(`Server on Port: ${ app.get('PORT') }`)
})