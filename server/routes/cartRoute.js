const express = require('express');
const controller = require ('../controllers/CartController')
const isAuth = require('../middleware/IsAuth')
// const { validator } = require('../middleware/validator');
const router = express.Router();


// router.get('/', validator, controller.getCartProducts))
// router.get('/', isAuth, controller.getCartProducts))
// router.get('/', isAuth, (req, res)=>{
//     return res.status(200).send({userId: req.user._id})
// })
// Route to add product in shop
router.post('/add', isAuth, controller.addToCart);
router.get('/items', isAuth, controller.getCartItems)



module.exports = router;