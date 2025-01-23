import express from "express";
import { cancelOrder, createOrder, getUserOrders, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/:userId", getUserOrders);

router.post("/cancel", cancelOrder);

router.put("/status", updateOrderStatus);

export default router;
