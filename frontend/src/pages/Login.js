// src/pages/Login.js
import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", { email, password });

      console.log("Login response:", res?.data);

      // tolerant parsing: different backends may return token/user in different shapes
      const token = res?.data?.token || res?.data?.token;
      const userId =
        res?.data?.user?.id ||
        res?.data?.user?._id ||
        res?.data?._id ||
        res?.data?.user?.id ||
        null;

      if (token) localStorage.setItem("token", token);
      if (userId) localStorage.setItem("userId", userId);

      navigate("/vote"); // redirect to vote page
    } catch (err) {
      console.error("Login error:", err);
      const message = err.response?.data || err.message || "Login failed";
      setError(typeof message === "string" ? message : JSON.stringify(message));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
