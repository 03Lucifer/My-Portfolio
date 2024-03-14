require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// Handling Cors policy
const corsOptions = {
    origin: "https://my-portfolio-client-rouge.vercel.app",
    methods: "GET, PUT, POST, DELETE, HEAD, PATCH",
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to my Homepage");
// })

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to my Register Page");
// })


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
});



