🗳️ Online Voting System

A secure web-based platform where users can register, log in, and cast votes for available candidates. Built using modern web technologies with authentication, vote protection, and database persistence.

🚀 Project Overview

This project is a full-stack Online Voting Web Application that allows authenticated users to vote in an election securely. It ensures:

✅ One account = One vote
✅ Username & email authentication
✅ Encrypted passwords
✅ JSON Web Token authentication
✅ Persistent storage (File-based database or MongoDB depending on version)

This is ideal for college project submissions, internal organization elections, or demonstrations of secure voting systems.

🧾 Features
👤 User Registration

Register with name, email, and password

Password hashing (bcrypt)

Email uniqueness check

🔐 User Login

JWT-based authentication

Protected login verification

Error handling for wrong credentials

🗳️ Voting System

User can vote only once

Stores vote selections securely

Prevents duplicate submissions

🧠 Backend Logic

Server handles registration, login, voting & results

Validates user state

📊 Voting Results

Dynamic vote counting

Results updated in real-time

🌐 Modern Frontend UI

Stylish responsive UI

User-friendly interface

Navigation pages (Home, Voting, Login, Register)

📁 Local Database Storage

Votes and users stored in JSON file (file-based database)

No need to install MongoDB/Compass

🔧 Tech Stack
Frontend

React.js

Axios (HTTP requests)

JWT decoding

Routing

Backend

Node.js

Express.js

bcrypt (password hashing)

JWT (security tokens)

CORS

file-based DB (db.json)

Tools

VS Code

Node Package Manager (npm)


📂 Project Structure
online_voting/
│
├── backend/
│   ├── server.js
│   ├── db.json
│   ├── package.json
│
├── frontend/
│   ├── src/
│       ├── pages/
│           ├── Login.js
│           ├── Register.js
│           ├── Voting.js
│       ├── App.js
│       ├── api.js
│

⚙️ How to Run
1️⃣ Install dependencies

Backend:

cd backend
npm install


Frontend:

cd ../frontend
npm install

2️⃣ Run Backend
cd backend
node server.js


✅ Should show: Server running on port 5001

3️⃣ Run Frontend
cd frontend
npm start


✅ React opens on: http://localhost:3000
✅ Workflow

User registers → data stored in secure DB

User logs in → receives JWT token

User selects candidate → vote recorded

System checks if already voted

Results update instantly

🎯 Learning Outcomes

This project demonstrates knowledge of:

Full-Stack Development

REST API

JWT Auth

Data Validation

State management

Password hashing

File-based storage

UI Routing

Error handling

Perfect for:

College major submissions

Viva demonstrations

Portfolio showcase

🖥️ Screens (Example)

Home Page

Login Page

Registration Page

Voting Candidate Page

Results Display

Protected Access Page

🌍 Future Enhancements

You may add:

✅ Admin login
✅ Candidate registration
✅ Real-time charts
✅ Email OTP verification
✅ Face recognition voting

👩‍💻 Developer

Falguni
Full-Stack Web Developer (React + Node)

📜 License

This project is free to modify for educational use.

🏁 Conclusion

The Online Voting System provides a secure, reliable, and user-friendly way for users to participate in elections digitally. With authentication, one-time voting restriction, encrypted credentials, and reliable backend validation, this application simulates a real-world secure e-voting environment suitable for academic demonstration and practical learning.
