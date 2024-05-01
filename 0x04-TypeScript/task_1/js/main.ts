interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
}

// Director's interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Printing teachers interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

//  calling printTeacherFunction
const printTeacher: printTeacherFunction  = (firstName: string,  lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Student class constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Student class interface
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass  implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}