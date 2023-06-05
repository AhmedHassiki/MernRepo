const Cart = require('../model/Cart')


exports.addToCart = async (req, res) => {
    try {
        const { productId, count } = req.body;
        console.log("req.body" , req.body)
        // Vérifiez si l'utilisateur est connecté
        if (!req.user || !req.user._id) {
          return res.status(401).json({ message: 'Utilisateur non authentifié' });
        }    
        const userId  = req.user._id;
      const cartItem = await Cart.findOne({ userId, productId });  
      if (cartItem) {
        // Si le produit est déjà dans le panier, mettez à jour la quantité
        cartItem.count = parseInt(count);
        console.log("cartItem:", cartItem)
        await cartItem.save();
      } else {
        // Si le produit n'est pas encore dans le panier, ajoutez-le
        const newCartItem = new Cart({ userId, productId, count });
        console.log("newCartItem:", newCartItem)
        await newCartItem.save();
      }  
      const cart = await Cart.find({ userId }).populate('productId');  
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };

  exports.getCartItems = async (req, res) => {
    try {
      // Vérifiez si l'utilisateur est connecté
      if (!req.user || !req.user._id) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
      }  
      const userId = req.user._id;  
      const result = await Cart.find({ userId }).populate('productId');  
      res.status(200).json({msg: "user ID and product found", response:result});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };