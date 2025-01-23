import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/m2/users/forgot-password', { email });
      if (response.data.success) {
        setEmailSent(true);
        alert(response);
      } else {
        alert(response);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the reset link.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      {!emailSent ? (
        <>
          <h4 className="text-white text-3xl mb-4">Forgot Password</h4>
          <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
            <label htmlFor="email" className="text-gray-700 text-lg mb-2 block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
            >
              Send Reset Link
            </button>
          </div>
        </>
      ) : (
        <h4 className="text-white text-xl">Password reset link sent successfully! Check your email.</h4>
      )}
    </div>
  );
};

export default ForgotPassword;
