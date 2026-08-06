const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routers/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const morgan = require("morgan");
const authRoutes = require("./routers/authRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/users", userRouter);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
