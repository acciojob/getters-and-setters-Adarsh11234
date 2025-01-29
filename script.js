class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(newAge) {
        if (newAge < 0) {
            alert("Age cannot be negative.");
        } else {
            this._age = newAge;
        }
    }

    get age() {
        return this._age;
    }
}

class Student extends Person {
    study() {
        return `${this.name} is studying.`;
    }
}

class Teacher extends Person {
    teach() {
        return `${this.name} is teaching.`;
    }
}

let currentPerson = null;

function createPerson() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    if (!name || isNaN(age)) {
        alert("Please enter a valid name and age.");
        return;
    }
    currentPerson = new Person(name, age);
    displayInfo();
}

function createStudent() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    if (!name || isNaN(age)) {
        alert("Please enter a valid name and age.");
        return;
    }
    currentPerson = new Student(name, age);
    displayInfo();
}

function createTeacher() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    if (!name || isNaN(age)) {
        alert("Please enter a valid name and age.");
        return;
    }
    currentPerson = new Teacher(name, age);
    displayInfo();
}

function updateAge() {
    if (!currentPerson) {
        alert("Create a person first!");
        return;
    }
    const newAge = parseInt(document.getElementById("newAge").value);
    if (isNaN(newAge)) {
        alert("Please enter a valid age.");
        return;
    }
    currentPerson.age = newAge;
    displayInfo();
}

function performAction() {
    if (!currentPerson) {
        alert("Create a person first!");
        return;
    }
    let actionMessage = "";
    if (currentPerson instanceof Student) {
        actionMessage = currentPerson.study();
    } else if (currentPerson instanceof Teacher) {
        actionMessage = currentPerson.teach();
    } else {
        actionMessage = `${currentPerson.name} is just a person.`;
    }
    document.getElementById("output").innerHTML += `<p>${actionMessage}</p>`;
}

function displayInfo() {
    document.getElementById("output").innerHTML = `<p><strong>Name:</strong> ${currentPerson.name}, <strong>Age:</strong> ${currentPerson.age}</p>`;
}
