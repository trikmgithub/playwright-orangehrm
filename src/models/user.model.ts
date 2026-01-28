export interface User {
  username: string;
  password: string;
  role?: 'Admin' | 'ESS';
  firstName?: string;
  lastName?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export type UserRole = 'Admin' | 'ESS';
