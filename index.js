const express = require("express");

const app = express();

// Constants
const PORT = 5725;
// Middleware
app.use(express.json());

// main route
app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Welcome to NodeApp</title>
<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
height: 100vh;
background: linear-gradient(135deg, #001f3f, #0074D9);
display: flex;
justify-content: center;
align-items: center;
font-family: 'Segoe UI', sans-serif;
overflow: hidden;
}
.container {
text-align: center;
color: #fff;
}
h1 {
font-size: 4rem;
margin-bottom: 20px;
letter-spacing: 2px;
background: linear-gradient(to right, #00e0ff, #0074D9);
-webkit-background-clip: text;
color: transparent;
}
p {
font-size: 1.3rem;
margin-bottom: 40px;
color: #dbeafe;
}
button {
padding: 15px 35px;
font-size: 1rem;
border: none;
border-radius: 30px;
background: linear-gradient(to right, #00c9ff, #92fe9d);
color: #000;
cursor: pointer;
}
button:hover {
transform: scale(1.1);
box-shadow: 0 0 15px #92fe9d;
}
</style>
</head>
<body>
<div class="container">
<h1>Welcome to NodeApp</h1>
<p>Powerful app running from Docker Hub</p>
<a href="http://localhost:3000"><button>Get Started</button></a>
</div>
</body>
</html>

  `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

