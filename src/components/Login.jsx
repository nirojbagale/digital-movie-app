import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("User logged in:", { email, password });
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form 
                onSubmit={handleLogin} 
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 sm:w-96"
            >
                <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

                {/* Email Field */}
                <div className="mb-3">
                    <label className="block text-gray-300 text-sm mb-1">Email</label>
                    <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
                        {/* Smaller SVG Icon */}
                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm3.05-1a1 1 0 0 0-.78.375L8 7.8l5.73-4.425A1 1 0 0 0 13 3H3.05z"/>
                        </svg>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent outline-none text-white w-full ml-2 text-sm"
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="mb-3">
                    <label className="block text-gray-300 text-sm mb-1">Password</label>
                    <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
                        {/* Smaller SVG Icon */}
                        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
