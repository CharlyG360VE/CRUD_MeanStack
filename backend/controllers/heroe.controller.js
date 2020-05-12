const heroeModel = require('../models/heroe');

const heroeCtrl = {};

heroeCtrl.getHeroes = async (req, res) => {

  const heroes = await heroeModel.find();

  res.json(heroes);

};

heroeCtrl.getHeroe = async (req, res) => {

  const { id } = req.params;

  const heroe = await heroeModel.findById( id );

  res.json( heroe );

};

heroeCtrl.createHeroe = async (req,res) => {

  const heroe = new heroeModel(req.body);
  await heroe.save();

  res.json({
    status: 'Heroe guardado'
  })

};

heroeCtrl.editHeroe = async (req,res) => {

  const { id } = req.params;

  const heroe = {

    nombre: req.body.nombre ,
    poder: req.body.poder,
    vivo: req.body.vivo

  };

  await heroeModel.findByIdAndUpdate( id, { $set: heroe }, { new: true } );

  res.json({
    status: 'Heroe actualizado'
  })

};

heroeCtrl.deleteHeroe = async (req,res) => {

  const { id } = req.params;

  await heroeModel.findByIdAndRemove(id);

  res.json({
    status: 'Heroe eliminado'
  })

};

module.exports = heroeCtrl;