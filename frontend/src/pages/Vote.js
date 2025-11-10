// src/pages/Vote.js
import React, { useState, useEffect } from "react";
import API from "../api";

function Vote() {
  const [candidate, setCandidate] = useState("");
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("userId"); // get current user ID

  const handleVote = async () => {
    try {
      const res = await API.post("/vote", { userId, candidate });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Vote failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Vote</h2>
      {message && <p>{message}</p>}
      <select value={candidate} onChange={(e) => setCandidate(e.target.value)}>
        <option value="">Select candidate</option>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Charlie">Charlie</option>
      </select>
      <br />
      <button onClick={handleVote} disabled={!candidate}>Submit Vote</button>
    </div>
  );
}

export default Vote;

