const studentList = document.getElementById("student-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


function displayStudents() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let students = JSON.parse(this.responseText);
      renderStudents(students);
    }
  };
  xhr.open("GET", "/get-students/", true);
  xhr.send();
}


function renderStudents(students) {
  studentList.innerHTML = ""; 
  students.forEach((student) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.student_id}</td>
      <td>${student.level}</td>
      <td>${student.department}</td>
      <td>${student.gpa}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.date_of_birth}</td>
      <td>${student.gender}</td>
      <td>${student.status}</td>
      <td><button onclick="editStudent('${student.student_id}', '${student.name}', '${student.department}', '${student.level}', '${student.gpa}', '${student.email}', '${student.phone}', '${student.date_of_birth}', '${student.gender}', '${student.status}')">Edit</button></td>
    `;
    studentList.appendChild(row);
  });
}


function searchStudents() {
  const searchParam = searchInput.value.toLowerCase();
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let students = JSON.parse(this.responseText);
      const filteredStudents = students.filter(
        (student) =>
          student.name.toLowerCase().includes(searchParam) ||
          student.department.toLowerCase().includes(searchParam)
      );
      renderStudents(filteredStudents);
    }
  };
  xhr.open("GET", `/search-students/?search_param=${searchParam}`, true);
  xhr.send();
}

searchButton.addEventListener("click", searchStudents);


displayStudents();



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