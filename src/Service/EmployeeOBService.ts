import EmployeeOBRepository from "../Repository/EmployeeOBRepository";
import { IEmployeeOB } from "../Interface/IEmployeeOB";

class EmployeeOBService {
  static async createEmployeeOB(data: IEmployeeOB) {
    return await EmployeeOBRepository.create(data);
  }

  static async getEmployeeOB(id: string) {
    return await EmployeeOBRepository.findById(id);
  }
  static async getAllEmployeeOB() {
    return await EmployeeOBRepository.findAll();
  }

  static async updateEmployeeOB(id: string, data: Partial<IEmployeeOB>) {
    return await EmployeeOBRepository.updateById(id, data);
  }

  static async deleteEmployeeOB(id: string) {
    return await EmployeeOBRepository.deleteById(id);
  }
}

export default EmployeeOBService;
