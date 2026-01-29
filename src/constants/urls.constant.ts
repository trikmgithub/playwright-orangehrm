const BASE_URL = process.env.BASE_URL;

export const URLS = {
  BASE: BASE_URL,
  LOGIN: '/web/index.php/auth/login',
  FORGET_PASSWORD: '/web/index.php/auth/requestPasswordResetCode',
  DASHBOARD: '/web/index.php/dashboard/index',
  PIM: {
    BASE: '/web/index.php/pim/viewEmployeeList',
    ADD_EMPLOYEE: '/web/index.php/pim/addEmployee',
    EMPLOYEE_LIST: '/web/index.php/pim/viewEmployeeList',
  },
  ADMIN: {
    BASE: '/web/index.php/admin/viewSystemUsers',
  },
  LEAVE: {
    BASE: '/web/index.php/leave/viewLeaveList',
  },
  TIME: {
    BASE: '/web/index.php/time/viewEmployeeTimesheet',
  },
  RECRUITMENT: {
    BASE: '/web/index.php/recruitment/viewCandidates',
  },
} as const;

export const CREDENTIALS = {
  ADMIN: {
    username: 'Admin',
    password: 'admin123'
  }
} as const;
