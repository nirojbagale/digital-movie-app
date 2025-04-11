import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../API";
import { useDigitalMovieContext } from "./Context";

function Login() {
  const { setUser } = useDigitalMovieContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  const handleLoginFormSubmit = useCallback(
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
        const { data } = await api.post("/login", {
          email: formData.email,
          password: formData.password,
        });
        setUser(data?.user);
        localStorage.setItem("isLoggedIn", "true");
        alert("Welcome back");
        navigate("/");
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
        onSubmit={handleLoginFormSubmit}
        className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 sm:w-96"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

        {/* Email Field */}
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">Email</label>
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            {/* Smaller SVG Icon */}
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm3.05-1a1 1 0 0 0-.78.375L8 7.8l5.73-4.425A1 1 0 0 0 13 3H3.05z" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              className="bg-transparent outline-none text-white w-full ml-2 text-sm"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="block text-gray-300 text-sm mb-1">Password</label>
          <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
            {/* Smaller SVG Icon */}
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              className="bg-transparent outline-none text-white w-full ml-2 text-sm"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full text-sm mt-4"
        >
          Login
        </button>

        {/* Forgot Password & Sign Up */}
        <div className="text-center mt-3 text-sm">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-red-400 hover:text-red-500"
          >
            Forgot Password?
          </button>
          <p className="mt-2">
            Don't have an account?
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-400 hover:text-blue-500 ml-1"
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
