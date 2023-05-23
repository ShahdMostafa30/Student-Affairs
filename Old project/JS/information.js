// Get student data from local storage
const students = JSON.parse(localStorage.getItem("students")) || [];

// Get the table body element
let studentList = document.getElementById("student-list");

// Iterate through each student and add a row to the table for each one
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let row = document.createElement("tr");

  // Set the HTML content of the row to display the student information
  row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.level}</td>
        <td>${student.department}</td>
        <td>${student.gpa}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.dateOfBirth}</td>
        <td>${student.gender}</td>
        <td>${student.status}</td>
        <td><button onclick="editStudent('${student.id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.dateOfBirth}', '${student.gender}', '${student.status}')">Edit</button></td>

        
    `;
  // Add the row to the table
  studentList.appendChild(row);
}

// add event listener to the edit button to redirect to the edit page and pass the student id
function editStudent(studentId, studentName, studentDepartment, studentLevel, studentGpa, studentEmail,
  studentPhone, studentDateOfBirth, studentGender, studentStatus) {
  const url = `Edit.html?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}&level=${encodeURIComponent(studentLevel)}&gpa=${encodeURIComponent(studentGpa)}&email=${encodeURIComponent(studentEmail)}&phone=${encodeURIComponent(studentPhone)}&dob=${encodeURIComponent(studentDateOfBirth)}&gender=${encodeURIComponent(studentGender)}&status=${encodeURIComponent(studentStatus)}`;
  window.location.href = url;
}

