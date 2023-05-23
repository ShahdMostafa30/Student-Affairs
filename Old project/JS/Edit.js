const urlParams = new URLSearchParams(window.location.search);
const nameInput = document.getElementById('name');
const idInput = document.getElementById('id');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const DPSelect = document.getElementById('DP');
const gpaInput = document.getElementById('GPA');
const dobInput = document.getElementById('dob');
const levelInput = document.getElementById('Level');
const StatusSelect = document.getElementById('Status');
const genderSelect = document.getElementById('Gender');
const saveButton = document.getElementById('save-button');

// pre-fill form fields with student data from URL parameters
nameInput.value = urlParams.get('name');
idInput.value = urlParams.get('id');
emailInput.value = urlParams.get('email');
phoneInput.value = urlParams.get('phone');
DPSelect.value = urlParams.get('department');
gpaInput.value = urlParams.get('gpa');
dobInput.value = urlParams.get('dob');
levelInput.value = urlParams.get('level');
StatusSelect.value = urlParams.get('status');
genderSelect.value = urlParams.get('gender');
//save edited to local storage
function saveStudent(event) {
    event.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentIndex = students.findIndex(student => student.id === idInput.value);
    students[studentIndex].id = idInput.value;
    students[studentIndex].name = nameInput.value;
    students[studentIndex].email = emailInput.value;
    students[studentIndex].phone = phoneInput.value;
    students[studentIndex].department = DPSelect.value;
    students[studentIndex].gpa = gpaInput.value;
    students[studentIndex].dateOfBirth = dobInput.value;
    students[studentIndex].level = levelInput.value;
    students[studentIndex].status = StatusSelect.value;
    students[studentIndex].gender = genderSelect.value;
    localStorage.setItem('students', JSON.stringify(students));
    alert('Student saved!');
}
saveButton.addEventListener('click', saveStudent);