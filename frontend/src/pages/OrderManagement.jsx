import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Orders = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/orders/${userId}`);
        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        setError('Error fetching orders');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <p className="text-center text-xl">Loading orders...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-lg">No orders found</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold">Order ID: {order._id}</h3>
              <p className="text-md text-gray-600">Status: {order.status}</p>
              <p className="text-md text-gray-600">Phone: {order.phone}</p>
              <p className="text-md text-gray-600">Address: {order.address}</p>
              <p className="text-lg font-bold">Total Price: ${order.totalPrice}</p>

              <div className="mt-4 space-y-3">
                <h4 className="text-lg font-semibold">Products</h4>
                {order.products.map((item, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-md">
                    <p className="text-md font-medium">Product Name: {item.product.name}</p>
                    <p className="text-sm text-gray-500">Price: ${item.product.price}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
