import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User signed up:", formData);
        navigate("/login"); // Redirect to login after signup
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form 
                onSubmit={handleSubmit} 
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 sm:w-96"
            >
                <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>

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
                    <label className="block text-gray-300 text-sm mb-1">Confirm Password</label>
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
