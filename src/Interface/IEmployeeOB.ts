export interface IEmployeeOB {
  personalDetails: {
    employeeId: string;
    fullName: string;
    dateOfJoining: Date;
    email: string;
    mobile: string;
    countryCode: string;
    gender: string;
    photo: string;
    dateOfBirth: Date;
    age: number;
    nationality: string;
    religion: string;
    race: string;
    country: string;
    provinceState: string;
    postalCode: string;
    city: string;
    streetName: string;
    blockHouseNo: string;
    levelNo: string;
    unitNo: string;
    address: string;
    language: string;
  };
  education: {
    educationEntries: Array<{
      instituteName: string;
      qualification: string;
      grade: string;
      startDate: Date;
      endDate: Date;
      document: string;
    }>;
    skills: string[];
  };
  experience: {
    experienceEntries: Array<{
      location: string;
      companyName: string;
      designation: string;
      periodFrom: Date;
      periodTo: Date;
      reasonForLeaving: string;
      document: string;
    }>;
  };
  contact: {
    referenceContacts: Array<{
      name: string;
      relationship: string;
      phone: string;
      email: string;
      countryCode: string;
    }>;
    emergencyContacts: Array<{
      name: string;
      relationship: string;
      phone: string;
      countryCode: string;
    }>;
  };
  maritalStatus: {
    status: string;
    spouseEmploymentStatus: string;
    numberOfChildren: number;
    children: Array<{
      name: string;
      relationship: string;
      dateOfBirth: Date;
    }>;
    otherStatus: string;
  };
  employment: {
    source: string;
    businessUnit: string;
    department: string;
    designation: string;
    reportingTo: string;
    userRole: string;
    probationPeriod: string;
    workingDays: string;
    employmentType: string;
    logIn: string;
    eligibleFor: {
      partTime: boolean;
      overTime: boolean;
    };
    equipmentIssuance: Array<{
      type: string;
      brand: string;
      model: string;
      serialNumber: string;
      assetTag: string;
      issueDate: Date;
    }>;
  };
  earning: {
    basicPay: number;
    paymentType: string;
    paymentMode: string;
    frequency: string;
    payBasis: string;
    hourlyRate: number;
    dailyRate: number;
    salaryAdvance: boolean;
    ordinaryWages: Array<{
      title: string;
      amount: number;
      cpfApplicable: boolean;
      taxApplicable: boolean;
    }>;
    additionalWages: Array<{
      title: string;
      amount: number;
      cpfApplicable: boolean;
      taxApplicable: boolean;
    }>;
  };
  leaveBenefits: {
    offInLieuEligible: boolean;
    leaveRows: Array<{
      code: string;
      type: string;
      eligibility: string;
      leaveIncrement: string;
      hourlyTimeOff: boolean;
      prorate: boolean;
    }>;
    availableItems: string[];
    assignedItems: string[];
  };
}
