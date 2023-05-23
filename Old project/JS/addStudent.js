function validInputs(){
  let name = document.getElementById("name").value;
  const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  if (!name.match(nameRegex)) {
    alert("Invalid Name:\nThe name should begin with capital letter then seperated by space"); 
    document.getElementById("name").focus();
    return false;
  }

  let ID = document.getElementById("ID").value;
  if (ID.length !== 8) {
    alert("Invalid ID:\nThe ID must be 8 digits"); 
    document.getElementById("ID").focus();
    return false;
  }

  let students = JSON.parse(localStorage.getItem("students"));
  if(students !== null){
    for(let i = 0; i < students.length; i++){
      if(students[i].id === ID){
        alert("Invalid ID:\nThe ID is already exist");
        document.getElementById("ID").focus();
        return false;
      }
    }
  }


  let level = document.getElementById("Level").value;
  let Department = document.getElementById("Department").value;
  if (level == "Level 1" || level == "Level 2"){
    if(Department !== "None"){
      alert("Student Level is less than 3:\nPlease select None");
      document.getElementById("Department").focus();
      return false;
    }
  }

  let GPA = document.getElementById("GPA").value;
  if (GPA === "" ) {
    alert("Please enter a valid GPA");
    document.getElementById("GPA").focus();
    return false;
  }

  let Email = document.getElementById("Email").value;
  const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/;
  if (!Email.match(emailRegex)) {
    alert("Invalid Email:\nPlease enter a valid email address"); 
    document.getElementById("Email").focus();
    return false;
  }

  let Phone = document.getElementById("Phone").value;
  const phoneRegex = /^\d{11}$/;
  if(!Phone.match(phoneRegex)){
    alert("Invalid Phone:\nThe Phone must be 11 digit"); 
    document.getElementById("Phone").focus();
    return false;
  }


  let BirthDate = document.getElementById("BirthDate").value;
  if(BirthDate == ""){
    alert("Please enter Birth Date");
    document.getElementById("BirthDate").focus();
    return false;
  }
  return true;
}

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

     // Validate the inputs
     if (!validInputs()) {
      return;
    }
    else{
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
    alert("Student data saved to Local Storage");

    // Reset the form
    form.reset();

    // Show a confirmation message
    }
   
  });
});
