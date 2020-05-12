const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroeSchema = new Schema({

  nombre: { type: String, required: true },
  poder: { type: String, required: true },
  vivo: { type: Boolean, required: true }

})

module.exports = mongoose.model('heroes', heroeSchema);