const Order = require('../model/Order');
const Cart = require('../model/Cart');
const { getCartItems, deleteCart } = require('./CartController');

// Créer une nouvelle commande
exports.createOrder = async (req, res) => {
  try {
    // Vérifier si l'utilisateur est connecté
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }

    // Récupérer les données de la commande à partir du corps de la requête
    const { shippingAddress, paymentMethod } = req.body;


    // Récupérer les produits dans le panier de l'utilisateur
    const userId = req.user._id;
    const cartItems = await Cart.find({ userId }).populate('productId');
    // console.log(cartItems)
    // Vérifier si le panier est vide
    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Le panier est vide' });
    }

    // Calculer le coût total de la commande
    let totalCost = 0;
    let shippingCost = 0;

    for (const item of cartItems) {
        console.log(item.productId.price)
      totalCost += item.count * parseInt(item.productId.price);
      shippingCost += totalCost + 7;
    }

    // Créer la commande avec les données fournies
    const order = new Order({
      user: req.user._id,
      products: cartItems.map(item => ({ product: item.productId._id, count: item.count })),
      shippingAddress,
      paymentMethod,
      shippingCost,
      totalCost,
      status: 'pending'
    });

    // Enregistrer la commande dans la base de données
    await order.save();

    // Mettre à jour l'état des produits dans le panier de l'utilisateur
    for (const item of cartItems) {
      item.status = 'ordered';
      await item.save();
    }

    // Vider le panier de l'utilisateur
    
    await Cart.deleteMany({userId:req.user._id});

    res.status(201).json({ message: 'Commande créée avec succès', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


// // Récupérer toutes les commandes de l'utilisateur connecté
// exports.getOrders = async (req, res) => {
//   try {
//     // Vérifier si l'utilisateur est connecté
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: 'Utilisateur non authentifié' });
//     }

//     // Récupérer toutes les commandes de l'utilisateur
//     const orders = await Order.find({ user: req.user._id }).populate('products.product');

//     res.status(200).json({ message: 'Commandes récupérées avec succès', orders });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// };

// // Mettre à jour l'état d'une commande
// exports.updateOrderStatus = async (req, res) => {
//   try {
//     // Vérifier si l'utilisateur est connecté
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: 'Utilisateur non authentifié' });
//     }

//     // Récupérer l'ID de la commande à mettre à jour
//     const orderId = req.params.id;

//     // Vérifier si la commande existe dans la base de données
//     const order = await Order.findById(orderId);
//     if (!order) {
//       return res.status(404).json({ message: 'Commande non trouvée' });
//     }

//     // Vérifier si l'utilisateur est autorisé à mettre à jour la commande
//     if (order.user.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ message: "Vous n'êtes pas autorisé à mettre à jour cette commande" });
//     }

//     // Récupérer le nouvel état de la commande à partir du corps de la requête
//     const { status } = req.body;

//     // Mettre à jour l'état de la commande dans la base de données
//     order.status = status;
//     await order.save();

//     res.status(200).json({ message: 'Statut de la commande mis à jour avec succès', order });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// };