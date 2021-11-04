const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main'); 
/* GET home page. */
router.get('/', ctrlMain.index); 
router.get('/viewcars', ctrlMain.viewcars);
router.get('/signup', ctrlMain.signup);
module.exports = router;
