import { Request, Response } from "express";
import EmployeeOBService from "../Service/EmployeeOBService";

class EmployeeOBController {
  static async createEmployeeOB(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await EmployeeOBService.createEmployeeOB(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async getAllEmployeeOB(req: Request, res: Response) {
    try {
      const result = await EmployeeOBService.getAllEmployeeOB();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async getEmployeeOB(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await EmployeeOBService.getEmployeeOB(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async updateEmployeeOB(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await EmployeeOBService.updateEmployeeOB(id, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async deleteEmployeeOB(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await EmployeeOBService.deleteEmployeeOB(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default EmployeeOBController;
