const express = require('express');
const router = express.Router();

const heroeCtrl = require('../controllers/heroe.controller');

router.get( '/', heroeCtrl.getHeroes );
router.get( '/:id', heroeCtrl.getHeroe );
router.post( '/', heroeCtrl.createHeroe );
router.put( '/:id', heroeCtrl.editHeroe );
router.delete( '/:id', heroeCtrl.deleteHeroe );

module.exports = router;