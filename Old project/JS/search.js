const students = JSON.parse(localStorage.getItem('students')) || [];
const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
// display students
function displayStudents() {
  tableBody.innerHTML = '';
  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.id}</td>
                    <td>${student.department} <button onclick="editDepartment('${student.id}', '${student.name}', '${student.department}')">Edit</button></td>
                    <td>${student.email}</td>
                    <td>${student.gpa}</td>
                    <td>${student.phone}</td>
                    <td>${student.dateOfBirth}</td>
                    <td>${student.level}</td>
                    <td>${student.status}</td>
                   <td><button onclick="editStudent('${student.id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.dateOfBirth}', '${student.gender}', '${student.status}')">Edit</button></td>

                `;
    tableBody.appendChild(tr);
  });
}
displayStudents();
// search students
function searchStudents() {
  const searchValue = searchInput.value.toLowerCase();
  const filteredStudents = students.filter(student => {
    return student.name.toLowerCase().includes(searchValue) || student.department.toLowerCase().includes(searchValue);
  });
  tableBody.innerHTML = '';
  filteredStudents.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.id}</td>
                    <td>${student.department} <button onclick="editDepartment('${student.id}', '${student.name}', '${student.department}')">Edit</button></td>
                    <td>${student.email}</td>
                    <td>${student.gpa}</td>
                    <td>${student.phone}</td>
                    <td>${student.dateOfBirth}</td>
                    <td>${student.level}</td>
                    <td>${student.status}</td>
                   <td><button onclick="editStudent('${student.id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.dateOfBirth}', '${student.gender}', '${student.status}')">Edit</button></td>

                `;
    tableBody.appendChild(tr);
  });
}
searchButton.addEventListener('click', searchStudents);
// edit department
function editDepartment(studentId, studentName, studentDepartment) {
  // redirect to the student's editing page, passing the ID, name, and department as URL parameters
  const url = `StuDepartment.html?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}`;
  window.location.href = url;
}
function editStudent(studentId, studentName, studentDepartment, studentLevel, studentGpa, studentEmail,
  studentPhone, studentDateOfBirth, studentGender, studentStatus) {
  const url = `Edit.html?id=${studentId}&name=${encodeURIComponent(studentName)}&department=${encodeURIComponent(studentDepartment)}&level=${encodeURIComponent(studentLevel)}&gpa=${encodeURIComponent(studentGpa)}&email=${encodeURIComponent(studentEmail)}&phone=${encodeURIComponent(studentPhone)}&dob=${encodeURIComponent(studentDateOfBirth)}&gender=${encodeURIComponent(studentGender)}&status=${encodeURIComponent(studentStatus)}`;
  window.location.href = url;
}
