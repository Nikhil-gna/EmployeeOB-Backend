import EmployeeOBModel from "../Models/EmployeeOBModel";
import { IEmployeeOB } from "../Interface/IEmployeeOB";

class EmployeeOBRepository {
  static async create(data: IEmployeeOB) {
    return await EmployeeOBModel.create(data);
  }

  static async findById(id: string) {
    return await EmployeeOBModel.findById(id);
  }

  static async findAll() {
    return await EmployeeOBModel.find();
  }

  static async updateById(id: string, data: Partial<IEmployeeOB>) {
    return await EmployeeOBModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteById(id: string) {
    return await EmployeeOBModel.findByIdAndDelete(id);
  }
}

export default EmployeeOBRepository;
