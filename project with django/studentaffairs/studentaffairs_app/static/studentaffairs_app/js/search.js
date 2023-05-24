//const students = JSON.parse(localStorage.getItem('students')) || [];
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
// display students
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let students = JSON.parse(this.responseText);


    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      let row = document.createElement("tr");

      
      row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.student_id}</td>
            <td>${student.department}   <button onclick="editDepartment('${student.student_id}', '${student.name}', '${student.department}')">Edit</button></td>
            <td>${student.email}</td>
            <td>${student.gpa}</td>
            <td>${student.phone}</td>
            <td>${student.date_of_birth}</td>
            <td>${student.level}</td>
            <td>${student.status}</td>
            <td><button onclick="editStudent('${student.student_id}', '${student.name}', '${student.department}','${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.date_of_birth}', '${student.gender}', '${student.status}')">Edit</button></td>
        `;
      // Add the row to the table
      tableBody.appendChild(row);
    }
  }
};

xhr.open("GET", "/get-students/", true);
xhr.send();


// edit department
function editDepartment(studentId, studentName, studentDepartment) {
  // redirect to the student's editing page, passing the ID, name, and department as URL parameters
  const url = `/StuDepartment?id=${studentId}&name=${encodeURIComponent(studentName)}&Department=${encodeURIComponent(studentDepartment)}`;
  window.location.href = url;
}
function editStudent(studentId, studentName, studentDepartment, studentLevel, studentGpa, studentEmail,
  studentPhone, studentDateOfBirth, studentGender, studentStatus) {
  const url = `/edit?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}&level=${encodeURIComponent(studentLevel)}&gpa=${encodeURIComponent(studentGpa)}&email=${encodeURIComponent(studentEmail)}&phone=${encodeURIComponent(studentPhone)}&dob=${encodeURIComponent(studentDateOfBirth)}&gender=${encodeURIComponent(studentGender)}&status=${encodeURIComponent(studentStatus)}`;
  window.location.href = url;
}


// function searchStudents() {
//   const searchValue = searchInput.value.toLowerCase();
//   const filteredStudents = students.filter(student => {
//     return student.name.toLowerCase().includes(searchValue) || student.department.toLowerCase().includes(searchValue);
//   });
//   tableBody.innerHTML = '';
//   filteredStudents.forEach(student => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//                     <td>${student.name}</td>
//                     <td>${student.id}</td>
//                     <td>${student.department} <button onclick="editDepartment('${student.id}', '${student.name}', '${student.department}')">Edit</button></td>
//                     <td>${student.email}</td>
//                     <td>${student.gpa}</td>
//                     <td>${student.phone}</td>
//                     <td>${student.dateOfBirth}</td>
//                     <td>${student.level}</td>
//                     <td>${student.status}</td>
//                    <td><button onclick="editStudent('${student.id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.dateOfBirth}', '${student.gender}', '${student.status}')">Edit</button></td>

//                 `;
//     tableBody.appendChild(tr);
//   });
// }

// searchButton.addEventListener('click', searchStudents);