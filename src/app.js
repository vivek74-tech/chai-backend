import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app  = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({ limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit :"16kb"}))

app.use(express.static("public"))
app.use(cookieParser())



// router import


import userRouter from './routes/user.routes.js'

// router declare

app.use("/api/v1/users",userRouter)
// http://localhost:8000/api/v1/users/register
// Routes
app.use("/api/v1/users", userRouter);

// 👇 Error middleware hamesha routes ke baad
app.use((err, req, res, next) => {
  console.error(err);

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
    data: null,
  });
});


export default app;