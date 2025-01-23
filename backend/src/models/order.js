import mongoose from "mongoose";

// Define the order schema
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "shipped", "canceled", "completed"], // Allowed statuses
      default: "pending", // Default to pending when the order is created
    },
  },
  { timestamps: true }
);

// Create and export the Order model
const Order = mongoose.model("Order", orderSchema);
export default Order;
