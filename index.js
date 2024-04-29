// // packages
// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";

// // Utiles
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// dotenv.config();
// const port = process.env.PORT || 5000;

// connectDB();

// const app = express();
// app.use(cors(
//   {
//     {
//       origin : "*",
//       methods : ["POST","GET"],
//       credentials : true
//   }
//   }
// ));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api/users", userRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/orders", orderRoutes);

// app.get("/api/config/paypal", (req, res) => {
//   res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
// });

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

// app.listen(port, () => console.log(`Server running on port: ${port}`));




// packages
// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors"; // Import cors
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// dotenv.config();
// const port = process.env.PORT || 5000;

// connectDB();

// const app = express();
// app.use(cors({
//   origin: ["https://deploy-mern-asdf1.vercel.app"],
//   methods: ["POST", "GET"],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api/users", userRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/orders", orderRoutes);

// app.get("/api/config/paypal", (req, res) => {
//   res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
// });

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Static file serving

// app.listen(port, () => console.log(`Server running on port: ${port}`));





// import path from "path";
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// dotenv.config();
// const port = process.env.PORT || 5000;

// connectDB();

// const app = express();
// app.use(cors({
//   origin: "",
//   methods: ["POST", "GET"],
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api/users", userRoutes);
// app.use("/api/category", categoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/upload", uploadRoutes);
// app.use("/api/orders", orderRoutes);

// app.get("/api/config/paypal", (req, res) => {
//   res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
// });

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.listen(port, () => console.log(`Server running on port: ${port}`));









// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; // Add cors import

// Utils
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors({ // Correct object syntax
  origin: "*",
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Adjusted path

app.listen(port, () => console.log(`Server running on port: ${port}`));
