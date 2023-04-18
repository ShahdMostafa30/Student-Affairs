document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const idInput = document.getElementById("ID");
  const levelSelect = document.getElementById("Level");
  const departmentSelect = document.getElementById("Department");
  const gpaInput = document.getElementById("GPA");
  const emailInput = document.getElementById("Email");
  const phoneInput = document.getElementById("Phone");
  const addressInput = document.getElementById("Address");
  const birthDateInput = document.getElementById("BirthDate");
  const genderSelect = document.getElementById("Gender");
  const statusInput = document.getElementById("Status");;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the student data from the input fields
    const student = {
      name: nameInput.value,
      id: idInput.value,
      level: levelSelect.value,
      department: departmentSelect.value,
      gpa: gpaInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      dateOfBirth: birthDateInput.value,
      gender: genderSelect.value,
      status: statusInput.value
    };

    console.log("New student:", student);

    // Save the student data to Local Storage
    const students = JSON.parse(localStorage.getItem("students")) || [];
    console.log("Old students:", students);
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    console.log("New students:", students);
    alert("Student data saved to Local Storage!");

    // Reset the form
    form.reset();

    // Show a confirmation message
  });
});
