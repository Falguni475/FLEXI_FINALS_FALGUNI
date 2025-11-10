// src/pages/Register.js
import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Try the common register endpoint first, fall back to /signup if not found
      let res;
      try {
        res = await API.post("/register", { name, email, password });
      } catch (err) {
        // if /register doesn't exist on the backend, try /signup
        if (err.response?.status === 404) {
          res = await API.post("/signup", { name, email, password });
        } else throw err;
      }

      // tolerant parsing: handle multiple response shapes
      const token = res?.data?.token || res?.data?.token;
      const userId =
        res?.data?.user?.id ||
        res?.data?.user?._id ||
        res?.data?._id ||
        null;

      console.log("Register response:", res?.data);

      if (token) localStorage.setItem("token", token);
      if (userId) localStorage.setItem("userId", userId);

      navigate("/vote"); // redirect to vote page
    } catch (err) {
      console.error("Register error:", err);
      const message = err.response?.data || err.message || "Registration failed";
      setError(typeof message === "string" ? message : JSON.stringify(message));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
