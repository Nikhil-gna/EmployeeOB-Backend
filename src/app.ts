import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors package
import connectDB from "./Config/database";
import employeeRoutes from "./Routes/EmployeeOBRoutes";

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to the database
connectDB();

// Use empOnboarding routes
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Employee Onboarding backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
