import { Router } from "express";
import EmployeeOBController from "../Controller/EmployeeOBController";
import ValidateEmployeeOB from "../Middleware/ValidateEmployeeOB";

const router = Router();

router.post("/", ValidateEmployeeOB, EmployeeOBController.createEmployeeOB);
router.get("/", EmployeeOBController.getAllEmployeeOB);
router.get("/:id", EmployeeOBController.getEmployeeOB);
router.put("/:id", ValidateEmployeeOB, EmployeeOBController.updateEmployeeOB);
router.delete("/:id", EmployeeOBController.deleteEmployeeOB);

export default router;
