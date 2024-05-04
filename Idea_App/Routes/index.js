//importing the express.js
const express = require('express');

const app = express();

//start the server
app.listen(5000,
    () => {
        console.log("Server started at port 5000");
    });

const route = require("../Routes/ideas.routes.js");
app.use(express.json());
route(app);
     