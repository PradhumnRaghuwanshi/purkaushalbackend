const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false, limit: "50mb" }));

// api names---
//example => app.use("/api/todo", require("./routes/todo"));

app.use("/api/allProduct", require("./routes/allProduct"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/category", require("./routes/category"));
// app.use("/api/teacherDetail", require("./routes/teacherDetail"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
