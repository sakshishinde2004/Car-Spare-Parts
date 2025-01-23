// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordMatch, setPasswordMatch] = useState(true);
//   const { token } = useParams(); // Extract token from URL
//   const navigate = useNavigate();

//   const handlePasswordSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setPasswordMatch(false);
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:3000/m2/users/reset-password/${token}`, { password: newPassword });
//       if (response.data.success) {
//         alert(response);
//         navigate('/login'); // Redirect to login page after success
//       } else {
//         alert(response);
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred while resetting the password.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
//       <h4 className="text-white text-3xl mb-4">Reset Password</h4>
//       <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
//         <label htmlFor="newPassword" className="text-gray-700 text-lg mb-2 block">
//           New Password:
//         </label>
//         <input
//           type="password"
//           name="newPassword"
//           id="newPassword"
//           placeholder="Enter your new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//           required
//         />
//         <label htmlFor="confirmPassword" className="text-gray-700 text-lg mb-2 block">
//           Confirm New Password:
//         </label>
//         <input
//           type="password"
//           name="confirmPassword"
//           id="confirmPassword"
//           placeholder="Confirm your new password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//           required
//         />
//         {!passwordMatch && (
//           <p className="text-red-500 text-sm">Passwords do not match. Please try again.</p>
//         )}
//         <button
//           onClick={handlePasswordSubmit}
//           className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
//         >
//           Reset Password
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { token } = useParams(); // Extract token from URL
  const navigate = useNavigate();

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/m2/users/reset-password/${token}`, { password: newPassword });
      
      if (response.data.success) {
        alert(response.data.message); // Success message
        navigate('/login'); // Redirect to login page after success
      } else {
        alert(response.data.message); // Error message from backend
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data.message || 'An error occurred while resetting the password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <h4 className="text-white text-3xl mb-4">Reset Password</h4>
      <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
        <label htmlFor="newPassword" className="text-gray-700 text-lg mb-2 block">
          New Password:
        </label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <label htmlFor="confirmPassword" className="text-gray-700 text-lg mb-2 block">
          Confirm New Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        {!passwordMatch && (
          <p className="text-red-500 text-sm">Passwords do not match. Please try again.</p>
        )}
        <button
          onClick={handlePasswordSubmit}
          className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

