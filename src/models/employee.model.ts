export interface Employee {
  firstName: string;
  middleName?: string;
  lastName: string;
  employeeId?: string;
}

export interface PersonalDetails extends Employee {
  otherId?: string;
  licenseNumber?: string;
  licenseExpiryDate?: string;
  nationality?: string;
  maritalStatus?: 'Single' | 'Married' | 'Other';
  dateOfBirth?: string;
  gender?: 'Male' | 'Female';
  militaryService?: string;
  smoker?: boolean;
}

export interface ContactDetails {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  homeTelephone?: string;
  mobile?: string;
  workTelephone?: string;
  workEmail?: string;
  otherEmail?: string;
}
