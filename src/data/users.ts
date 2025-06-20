
export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'employee';
  jobTitle: string;
  department: string;
  employeeId: string;
  startDate: string;
  avatar: string;
  bannerColor: string;
  accentColor: string;
  phone: string;
  settings: {
    language: string;
    emailNotifications: boolean;
    pushNotifications: boolean;
    departmentAlerts: boolean;
    twoFactor: boolean;
    autoSave: boolean;
    dataBackup: boolean;
    theme: 'light' | 'dark';
  };
}

export const users: User[] = [
  // Admin Accounts
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'john.admin@company.com',
    firstName: 'John',
    lastName: 'Administrator',
    role: 'admin',
    jobTitle: 'System Administrator',
    department: 'IT Operations',
    employeeId: 'ADM-001',
    startDate: '2020-01-15',
    avatar: '',
    bannerColor: '#3b82f6',
    accentColor: '#10b981',
    phone: '+1 (555) 123-4567',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: true,
      dataBackup: true,
      theme: 'dark'
    }
  },
  {
    id: '2',
    username: 'sarah.manager',
    password: 'sarah456',
    email: 'sarah.johnson@company.com',
    firstName: 'Sarah',
    lastName: 'Johnson',
    role: 'admin',
    jobTitle: 'Department Manager',
    department: 'Human Resources',
    employeeId: 'MGR-002',
    startDate: '2019-03-20',
    avatar: '',
    bannerColor: '#ec4899',
    accentColor: '#f59e0b',
    phone: '+1 (555) 234-5678',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: true,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '3',
    username: 'emma.lead',
    password: 'emma789',
    email: 'emma.wilson@company.com',
    firstName: 'Emma',
    lastName: 'Wilson',
    role: 'admin',
    jobTitle: 'Team Lead',
    department: 'Marketing',
    employeeId: 'LEAD-003',
    startDate: '2020-11-05',
    avatar: '',
    bannerColor: '#f97316',
    accentColor: '#84cc16',
    phone: '+1 (555) 456-7890',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: false,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '4',
    username: 'david.super',
    password: 'david123',
    email: 'david.clark@company.com',
    firstName: 'David',
    lastName: 'Clark',
    role: 'admin',
    jobTitle: 'Operations Supervisor',
    department: 'Operations',
    employeeId: 'SUP-004',
    startDate: '2018-05-30',
    avatar: '',
    bannerColor: '#10b981',
    accentColor: '#ec4899',
    phone: '+1 (555) 789-0123',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: false,
      dataBackup: true,
      theme: 'dark'
    }
  },
  {
    id: '5',
    username: 'rachel.coord',
    password: 'rachel456',
    email: 'rachel.lee@company.com',
    firstName: 'Rachel',
    lastName: 'Lee',
    role: 'admin',
    jobTitle: 'Project Coordinator',
    department: 'Management',
    employeeId: 'COORD-005',
    startDate: '2020-08-25',
    avatar: '',
    bannerColor: '#84cc16',
    accentColor: '#6366f1',
    phone: '+1 (555) 012-3456',
    settings: {
      language: 'Korean',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: false,
      twoFactor: false,
      autoSave: false,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '6',
    username: 'brian.admin',
    password: 'brian789',
    email: 'brian.thompson@company.com',
    firstName: 'Brian',
    lastName: 'Thompson',
    role: 'admin',
    jobTitle: 'Network Administrator',
    department: 'IT Operations',
    employeeId: 'ADM-006',
    startDate: '2019-10-12',
    avatar: '',
    bannerColor: '#ec4899',
    accentColor: '#f59e0b',
    phone: '+1 (555) 345-6789',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: false,
      dataBackup: true,
      theme: 'dark'
    }
  },
  {
    id: '7',
    username: 'maria.hr',
    password: 'maria123',
    email: 'maria.gonzalez@company.com',
    firstName: 'Maria',
    lastName: 'Gonzalez',
    role: 'admin',
    jobTitle: 'HR Specialist',
    department: 'Human Resources',
    employeeId: 'HR-007',
    startDate: '2020-01-30',
    avatar: '',
    bannerColor: '#6366f1',
    accentColor: '#14b8a6',
    phone: '+1 (555) 678-9012',
    settings: {
      language: 'Spanish',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: false,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '8',
    username: 'robert.security',
    password: 'robert456',
    email: 'robert.jackson@company.com',
    firstName: 'Robert',
    lastName: 'Jackson',
    role: 'admin',
    jobTitle: 'Security Officer',
    department: 'Security',
    employeeId: 'SEC-008',
    startDate: '2019-07-14',
    avatar: '',
    bannerColor: '#f59e0b',
    accentColor: '#8b5cf6',
    phone: '+1 (555) 901-2345',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: false,
      dataBackup: true,
      theme: 'dark'
    }
  },

  // Employee Accounts
  {
    id: '9',
    username: 'mike.employee',
    password: 'mike123',
    email: 'mike.davis@company.com',
    firstName: 'Mike',
    lastName: 'Davis',
    role: 'employee',
    jobTitle: 'Software Developer',
    department: 'Engineering',
    employeeId: 'EMP-009',
    startDate: '2021-07-10',
    avatar: '',
    bannerColor: '#8b5cf6',
    accentColor: '#06b6d4',
    phone: '+1 (555) 345-6789',
    settings: {
      language: 'English',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: false,
      twoFactor: false,
      autoSave: true,
      dataBackup: false,
      theme: 'dark'
    }
  },
  {
    id: '10',
    username: 'alex.dev',
    password: 'alex456',
    email: 'alex.brown@company.com',
    firstName: 'Alex',
    lastName: 'Brown',
    role: 'employee',
    jobTitle: 'Frontend Developer',
    department: 'Engineering',
    employeeId: 'EMP-010',
    startDate: '2022-02-14',
    avatar: '',
    bannerColor: '#6366f1',
    accentColor: '#14b8a6',
    phone: '+1 (555) 567-8901',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: false,
      twoFactor: true,
      autoSave: true,
      dataBackup: false,
      theme: 'dark'
    }
  },
  {
    id: '11',
    username: 'lisa.analyst',
    password: 'lisa789',
    email: 'lisa.taylor@company.com',
    firstName: 'Lisa',
    lastName: 'Taylor',
    role: 'employee',
    jobTitle: 'Business Analyst',
    department: 'Operations',
    employeeId: 'EMP-011',
    startDate: '2021-09-12',
    avatar: '',
    bannerColor: '#f43f5e',
    accentColor: '#3b82f6',
    phone: '+1 (555) 678-9012',
    settings: {
      language: 'Spanish',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: true,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '12',
    username: 'anna.designer',
    password: 'anna123',
    email: 'anna.rodriguez@company.com',
    firstName: 'Anna',
    lastName: 'Rodriguez',
    role: 'employee',
    jobTitle: 'UI/UX Designer',
    department: 'Design',
    employeeId: 'EMP-012',
    startDate: '2022-01-20',
    avatar: '',
    bannerColor: '#f59e0b',
    accentColor: '#8b5cf6',
    phone: '+1 (555) 890-1234',
    settings: {
      language: 'French',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: false,
      twoFactor: false,
      autoSave: true,
      dataBackup: false,
      theme: 'light'
    }
  },
  {
    id: '13',
    username: 'tom.qa',
    password: 'tom456',
    email: 'tom.martinez@company.com',
    firstName: 'Tom',
    lastName: 'Martinez',
    role: 'employee',
    jobTitle: 'QA Engineer',
    department: 'Engineering',
    employeeId: 'EMP-013',
    startDate: '2021-04-18',
    avatar: '',
    bannerColor: '#06b6d4',
    accentColor: '#f97316',
    phone: '+1 (555) 901-2345',
    settings: {
      language: 'English',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: true,
      dataBackup: true,
      theme: 'dark'
    }
  },
  {
    id: '14',
    username: 'chris.support',
    password: 'chris789',
    email: 'chris.garcia@company.com',
    firstName: 'Chris',
    lastName: 'Garcia',
    role: 'employee',
    jobTitle: 'Technical Support',
    department: 'IT Support',
    employeeId: 'EMP-014',
    startDate: '2022-06-15',
    avatar: '',
    bannerColor: '#14b8a6',
    accentColor: '#f43f5e',
    phone: '+1 (555) 123-4567',
    settings: {
      language: 'Spanish',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: true,
      dataBackup: false,
      theme: 'dark'
    }
  },
  {
    id: '15',
    username: 'kelly.sales',
    password: 'kelly123',
    email: 'kelly.white@company.com',
    firstName: 'Kelly',
    lastName: 'White',
    role: 'employee',
    jobTitle: 'Sales Representative',
    department: 'Sales',
    employeeId: 'EMP-015',
    startDate: '2021-12-03',
    avatar: '',
    bannerColor: '#3b82f6',
    accentColor: '#10b981',
    phone: '+1 (555) 234-5678',
    settings: {
      language: 'English',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: false,
      twoFactor: true,
      autoSave: true,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '16',
    username: 'jenny.finance',
    password: 'jenny456',
    email: 'jenny.harris@company.com',
    firstName: 'Jenny',
    lastName: 'Harris',
    role: 'employee',
    jobTitle: 'Financial Analyst',
    department: 'Finance',
    employeeId: 'EMP-016',
    startDate: '2020-03-07',
    avatar: '',
    bannerColor: '#8b5cf6',
    accentColor: '#06b6d4',
    phone: '+1 (555) 456-7890',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: true,
      dataBackup: false,
      theme: 'light'
    }
  },
  {
    id: '17',
    username: 'steve.tech',
    password: 'steve789',
    email: 'steve.martin@company.com',
    firstName: 'Steve',
    lastName: 'Martin',
    role: 'employee',
    jobTitle: 'System Technician',
    department: 'IT Operations',
    employeeId: 'EMP-017',
    startDate: '2021-08-22',
    avatar: '',
    bannerColor: '#f97316',
    accentColor: '#84cc16',
    phone: '+1 (555) 567-8901',
    settings: {
      language: 'German',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: false,
      twoFactor: true,
      autoSave: true,
      dataBackup: true,
      theme: 'dark'
    }
  },
  {
    id: '18',
    username: 'paul.dev',
    password: 'paul123',
    email: 'paul.anderson@company.com',
    firstName: 'Paul',
    lastName: 'Anderson',
    role: 'employee',
    jobTitle: 'Backend Developer',
    department: 'Engineering',
    employeeId: 'EMP-018',
    startDate: '2022-04-05',
    avatar: '',
    bannerColor: '#f43f5e',
    accentColor: '#3b82f6',
    phone: '+1 (555) 789-0123',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: true,
      twoFactor: true,
      autoSave: true,
      dataBackup: false,
      theme: 'dark'
    }
  },
  {
    id: '19',
    username: 'linda.content',
    password: 'linda456',
    email: 'linda.thomas@company.com',
    firstName: 'Linda',
    lastName: 'Thomas',
    role: 'employee',
    jobTitle: 'Content Manager',
    department: 'Marketing',
    employeeId: 'EMP-019',
    startDate: '2021-11-18',
    avatar: '',
    bannerColor: '#10b981',
    accentColor: '#ec4899',
    phone: '+1 (555) 890-1234',
    settings: {
      language: 'French',
      emailNotifications: false,
      pushNotifications: true,
      departmentAlerts: false,
      twoFactor: false,
      autoSave: true,
      dataBackup: true,
      theme: 'light'
    }
  },
  {
    id: '20',
    username: 'susan.accounts',
    password: 'susan789',
    email: 'susan.moore@company.com',
    firstName: 'Susan',
    lastName: 'Moore',
    role: 'employee',
    jobTitle: 'Accountant',
    department: 'Finance',
    employeeId: 'EMP-020',
    startDate: '2020-12-10',
    avatar: '',
    bannerColor: '#06b6d4',
    accentColor: '#f97316',
    phone: '+1 (555) 012-3456',
    settings: {
      language: 'English',
      emailNotifications: true,
      pushNotifications: false,
      departmentAlerts: true,
      twoFactor: false,
      autoSave: true,
      dataBackup: false,
      theme: 'light'
    }
  }
];
