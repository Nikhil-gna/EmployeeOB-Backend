import mongoose, { Schema, Document } from "mongoose";
import { IEmployeeOB } from "../Interface/IEmployeeOB";

const EmployeeOBSchema = new Schema<IEmployeeOB & Document>(
  {
    personalDetails: {
      employeeId: { type: String, required: true },
      fullName: { type: String, required: true },
      dateOfJoining: { type: Date, required: true },
      email: { type: String, required: true },
      mobile: { type: String, required: true },
      countryCode: { type: String, required: true },
      gender: { type: String, required: true },
      photo: String,
      dateOfBirth: { type: Date, required: true },
      age: Number,
      nationality: String,
      religion: String,
      race: String,
      country: String,
      provinceState: String,
      postalCode: String,
      city: String,
      streetName: String,
      blockHouseNo: String,
      levelNo: String,
      unitNo: String,
      address: String,
      language: String,
    },
    education: {
      educationEntries: [
        {
          instituteName: String,
          qualification: String,
          grade: String,
          startDate: Date,
          endDate: Date,
          document: String,
        },
      ],
      skills: [String],
    },
    experience: {
      experienceEntries: [
        {
          location: String,
          companyName: String,
          designation: String,
          periodFrom: Date,
          periodTo: Date,
          reasonForLeaving: String,
          document: String,
        },
      ],
    },
    contact: {
      referenceContacts: [
        {
          name: String,
          relationship: String,
          phone: String,
          email: String,
          countryCode: String,
        },
      ],
      emergencyContacts: [
        {
          name: String,
          relationship: String,
          phone: String,
          countryCode: String,
        },
      ],
    },
    maritalStatus: {
      status: String,
      spouseEmploymentStatus: String,
      numberOfChildren: Number,
      children: [
        {
          name: String,
          relationship: String,
          dateOfBirth: Date,
        },
      ],
      otherStatus: String,
    },
    employment: {
      source: String,
      businessUnit: String,
      department: String,
      designation: String,
      reportingTo: String,
      userRole: String,
      probationPeriod: String,
      workingDays: String,
      employmentType: String,
      logIn: String,
      eligibleFor: {
        partTime: Boolean,
        overTime: Boolean,
      },
      equipmentIssuance: [
        {
          type: String,
          brand: String,
          model: String,
          serialNumber: String,
          assetTag: String,
          issueDate: Date,
        },
      ],
    },
    earning: {
      basicPay: Number,
      paymentType: String,
      paymentMode: String,
      frequency: String,
      payBasis: String,
      hourlyRate: Number,
      dailyRate: Number,
      salaryAdvance: Boolean,
      ordinaryWages: [
        {
          title: String,
          amount: Number,
          cpfApplicable: Boolean,
          taxApplicable: Boolean,
        },
      ],
      additionalWages: [
        {
          title: String,
          amount: Number,
          cpfApplicable: Boolean,
          taxApplicable: Boolean,
        },
      ],
    },
    leaveBenefits: {
      offInLieuEligible: Boolean,
      leaveRows: [
        {
          code: String,
          type: String,
          eligibility: String,
          leaveIncrement: String,
          hourlyTimeOff: Boolean,
          prorate: Boolean,
        },
      ],
      availableItems: [String],
      assignedItems: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model<IEmployeeOB & Document>(
  "EmployeeOB",
  EmployeeOBSchema
);
