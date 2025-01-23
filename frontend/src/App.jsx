import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Product from './pages/Product';
import CategoryManagement from './pages/CategoryManagement';
import ProductPage from './pages/ProductPage';
import OrderManagement from './pages/OrderManagement';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<CategoryManagement />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/orders" element={<OrderManagement />} />
      </Routes>
    </Router>
  );
}
