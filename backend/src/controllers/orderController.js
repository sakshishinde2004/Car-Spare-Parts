import Order from "../models/order.js";
import Product from "../models/product.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, products, totalPrice, phone, address } = req.body;

    if (!userId || !products || !totalPrice || !phone || !address) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Validate product stock as before
    for (const item of products) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({ success: false, message: `Product not found: ${item.product}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ success: false, message: `Insufficient stock for ${product.name}` });
      }

      // Reduce the stock for the product
      product.stock -= item.quantity;
      await product.save();
    }

    // Create the order with initial status of "pending"
    const order = new Order({
      user: userId,
      products,
      totalPrice,
      phone,
      address,
      status: "pending", // Default status
    });

    // Save the order to the database
    await order.save();

    res.status(201).json({ success: true, message: "Order placed successfully", order });

  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const cancelOrder = async (req, res) => {
  try {
    const { orderId, userId } = req.body;

    // Find the order by ID, populate product details
    const order = await Order.findById(orderId).populate('products.product');

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    // Check if the order belongs to the user
    if (order.user.toString() !== userId) {
      return res.status(403).json({ success: false, message: "You are not authorized to cancel this order" });
    }

    // Check if the order is not already canceled
    if (order.status === 'canceled') {
      return res.status(400).json({ success: false, message: "This order is already canceled" });
    }

    // Loop through each product in the order and update the stock
    for (const item of order.products) {
      const product = item.product;

      // Ensure the product is found and that the stock is a valid number
      if (product && !isNaN(product.stock)) {
        // Revert the stock back by adding the quantity of the canceled order
        product.stock += item.quantity;

        // Ensure the updated stock is valid and greater than or equal to 0
        if (product.stock < 0) {
          return res.status(400).json({ success: false, message: `Invalid stock for product: ${product.name}` });
        }

        // Save the product with the updated stock
        await product.save();
      } else {
        return res.status(400).json({ success: false, message: `Invalid product stock for ${product.name}` });
      }
    }

    // Mark the order as canceled
    order.status = 'canceled';
    await order.save();

    // Return success response
    res.status(200).json({ success: true, message: "Order canceled successfully", order });

  } catch (error) {
    console.error("Error canceling order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Controller to get order status
export const getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, status: order.status });

  } catch (error) {
    console.error("Error fetching order status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Controller to update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const validStatuses = ["pending", "shipped", "canceled", "completed"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    // Update the status
    order.status = status;
    await order.save();

    res.status(200).json({ success: true, message: "Order status updated", order });

  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find orders for the user, populate product details with name and price
    const orders = await Order.find({ user: userId })
      .populate("products.product", "name price")
      .select("products totalPrice phone address status createdAt");

    // Check if the user has any orders
    if (orders.length === 0) {
      return res.status(404).json({ success: false, message: "No orders found for this user" });
    }

    // Return success response with orders and details
    res.status(200).json({ success: true, orders });

  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

