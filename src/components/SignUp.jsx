import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../API";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  };
  const handleRegisterFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.email || !formData.password) {
        return alert("Please fill in all fields.");
      }
      if (!isValidPassword(formData.password)) {
        return alert(
          "Password must be at least 8 characters long and include at least one special character and one number."
        );
      }
      setIsSubmitting(true);
      try {
        const { data } = await api.post("/register", formData);
        alert(data?.message);
        localStorage.setItem("isLoggedIn", "true");
        alert("Welcome back");
        navigate("/login");
      } catch (error) {
        const errorMessage =
          error?.response?.data ||
          error?.response?.data?.error ||
          error.message ||
          "Login failed. Try again.";
        alert(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleRegisterFormSubmit}
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 sm:w-96"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>

        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleChange}
            className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg outline-none text-sm"
            required
          />
        </div>
        {/* Email Field */}
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg outline-none text-sm"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg outline-none text-sm"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg outline-none text-sm"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-gray-700 text-white w-full px-3 py-2 rounded-lg outline-none text-sm"
            required
          />
        </div>
        {/* Signup Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full text-sm mt-4"
        >
          Sign Up
        </button>

        {/* Already have an account? */}
        <div className="text-center mt-3 text-sm">
          <p>
            Already have an account?
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-400 hover:text-blue-500 ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
