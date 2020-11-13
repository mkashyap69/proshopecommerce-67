import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProduct,
  getTopProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} from '../controllers/productController.js';
import { isAdmin, protect } from '../middlewares/authMiddleware.js';

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

router.route('/:id/review').post(protect, createProductReview);

router.get('/top', getTopProducts);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, isAdmin, updateProduct)
  .delete(protect, isAdmin, deleteProduct);

export default router;
