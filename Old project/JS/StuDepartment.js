const urlParams = new URLSearchParams(window.location.search);
const nameInput = document.getElementById('name');
const idInput = document.getElementById('id');
const departmentSelect = document.getElementById('department');
const saveButton = document.getElementById('save-button');

// pre-fill form fields with student data from URL parameters
nameInput.value = urlParams.get('name');
idInput.value = urlParams.get('id');
departmentSelect.value = urlParams.get('department');

// save edited department back to local storage
function saveDepartment(event) {
  event.preventDefault();
  const students = JSON.parse(localStorage.getItem('students')) || [];
  console.log('students before update:', students);
  const studentIndex = students.findIndex(student => student.id === idInput.value);
  students[studentIndex].department = departmentSelect.value;
  console.log('students after update:', students);
  localStorage.setItem('students', JSON.stringify(students));
  console.log('students in localStorage:', JSON.parse(localStorage.getItem('students')));


  alert('Department saved!');
  nameInput.value = '';
  idInput.value = '';
  departmentSelect.value = '';
}


saveButton.addEventListener('click', saveDepartment);