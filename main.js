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
// // 1. Student Data Interface
// interface Student  {
//     name: string;
//     isSenior: boolean; // True if the student is a senior, false otherwise
//    completedAssignments: boolean; // True if the student has completed assignments, false otherwise
//   }
//   // 2. Student List
var student = ["Saima",
    "anshara",
    "Hania",
    "Hareem",
    "waheed"
];
console.log(student, "student");
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) {
        var isSenior = student.grade === 4;
        var hasAssignments = student.assignments.length > 0;
        var hasUncompletedAssignments = student.assignments.some(function (assignment) { return !assignment.completed; });
        return isSenior && (hasAssignments && hasUncompletedAssignments);
    });
}
// Example usage
var student1 = {
    name: "Saima",
    grade: 4,
    assignments: [
        { name: "Math Homework", completed: true },
        { name: "English Essay", completed: false },
    ],
};
var student2 = {
    name: "Waheed",
    grade: 2,
    assignments: [],
};
var students = [student1, student2];
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log(seniorStudentsWithAssignments);
console.log("Original Class List:");
console.log(students);
function removeStudentsWithoutCompletedAssignments(students) {
    return students.filter(function (student) {
        var isNotSenior = student.grade !== 4; // Only filter non-seniors or seniors with completed assignments
        var hasCompletedAssignments = student.assignments.every(function (assignment) { return assignment.completed; });
        return isNotSenior || hasCompletedAssignments;
    });
}
