//67 b& Assignment 4: Student List Organizer

// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?





// 1. Student Data Interface
interface Student {
  name: string;
  isSenior: boolean;
  completedAssignments: boolean;
}

// 2. Student List
// const students: Student[] = [
//   { name: "saima", isSenior: true, completedAssignments: true },
//   { name: "yusra", isSenior: false, completedAssignments: false },
//   { name: "Waheed", isSenior: true, completedAssignments: true },
//   // Add more students as needed
// ];

// Example usage (optional)
// console.log(students[0].name); // Access first student's name

// console.log(student, "student");

  //Q ==3
  //find senior student with assignment

  interface Student {
    name: string;
    grade: number; // Assuming grade represents year (1 for freshman, 4 for senior)
    assignments: Assignment[];
  }
  
  interface Assignment {
    name: string;
    completed: boolean;
  }
  
  function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => {
      const isSenior = student.grade === 4;
      const hasAssignments = student.assignments.length > 0;
      const hasUncompletedAssignments = student.assignments.some(assignment => !assignment.completed);
      return isSenior && (hasAssignments && hasUncompletedAssignments);
    });
  }
  
  // Example usage
  const student1: Student = {
    name: "Saima",
    grade: 4,
    assignments: [
      { name: "Math Homework", completed: true },
      { name: "English Essay", completed: false },
    ],
  };
  
  const student2: Student = {
    name: "Waheed",
    grade: 2,
    assignments: [],
  };
  
  const students = [student1, student2];
  
  const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
  
  console.log(seniorStudentsWithAssignments);
  
  
  console.log("Original Class List:");
  console.log(students);
  
  function removeStudentsWithoutCompletedAssignments(students: Student[]): Student[] {
    return students.filter(student => {
      const isNotSenior = student.grade !== 4; // Only filter non-seniors or seniors with completed assignments
      const hasCompletedAssignments = student.assignments.every(assignment => assignment.completed);
      return isNotSenior || hasCompletedAssignments;
    });
  }
