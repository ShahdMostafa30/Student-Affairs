if (localStorage.getItem("students") === null) {
    let student1 = {
        name: "Shahd Mostafa",
        id: "20211054",
        department: "CS",
        level: "Level 3",
        gpa: "3.5",
        email: "shahd@gmail.com",
        phone: "01111456252",
        dateOfBirth: "2004-11-27",
        gender: "Female",
        status: "Active"
    };

    let student2 = {
        name: "Noureen Saad",
        id: "202110555",
        department: "IT",
        level: "Level 3",
        gpa: "3.8",
        email: "Noureen@gmail.com",
        phone: "01111456252",
        dateOfBirth: "2004-11-27",
        gender: "Female",
        status: "Active"
    };
    let student3 = {
        name: "Mostafa Adel",
        id: "20211093",
        department: "IS",
        level: "Level 3",
        gpa: "3.4",
        email: "sasabataweu@gmail.com",
        phone: "01097305069",
        dateOfBirth: "2004-11-27",
        gender: "Male",
        status: "Active"
    };

    localStorage.setItem("students", JSON.stringify([student1, student2, student3]));

}