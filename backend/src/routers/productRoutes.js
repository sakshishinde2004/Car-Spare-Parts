import express from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from "../controllers/productController.js";
import upload from "../../middleware/uploadimage.js";

const router = express.Router();

// CRUD APIs for Products with image upload
router.post("/products", upload.single('image'), createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", upload.single('image'), updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/category/:categoryId", getProductsByCategory);

export default router;