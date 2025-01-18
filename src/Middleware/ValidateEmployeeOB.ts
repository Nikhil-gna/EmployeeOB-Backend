import { Request, Response, NextFunction } from "express";

const ValidateEmployeeOB = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { personalDetails } = req.body;

  if (!personalDetails || !personalDetails.employeeId) {
    res.status(400).json({ error: "Employee ID is required" });
    return; // Ensure the function ends here
  }

  next(); // Pass control to the next middleware or route handler
};

export default ValidateEmployeeOB;
