import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import { isAdmin, protect } from '../middlewares/authMiddleware.js';

router
  .route('/')
  .get(protect, isAdmin, getAllOrders)
  .post(protect, addOrderItems);
router.route('/myOrders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById).put(protect, updateOrderToPaid);

router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, updateOrderToDelivered);

export default router;
