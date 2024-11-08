const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const addButton = document.getElementById("btn");
const nameInput = document.getElementById("nameinput");
const ageInput = document.getElementById("ageinput");


const students = [
  {
    name: "Temitope Aladesiun",
    age: 20,
    matric_no: "103214",
  },
  {
    name: "Hikmah Adeyemo",
    age: 21,
    matric_no: "183214",
  },
  {
    name: "Ayomide Dauda",
    age: 17,
    matric_no: "203914",
  },
  {
    name: "Amos Jayeoba",
    age: 15,
    matric_no: "203914",
  },
  {
    name: "Kenny Agando",
    age: 16,
    matric_no: "213914",
  },
  {
    name: "Adetogun Mercy(AMA)",
    age: 21,
    matric_no: "194536",
  },
];

const studentBelowEighteen = students.filter((eachStudent) => {
  return eachStudent.age < 18
}).map((eachStudent, index) => {
  return `<ul class="mx-5">
       <li>${index + 1}: ${eachStudent.name} </li>
  </ul>`

});

box1.innerHTML = studentBelowEighteen


const studentAboveEighteen = students.filter((eachStudent) => {
  if (eachStudent.age >= 18) {
    return eachStudent.name
  }
}).map((eachStudent, index) => {
  box2.innerHTML += `<ul class="mx-5">
       <li>${index + 1}: ${eachStudent.name} </li>
  </ul>`

});

// box2.innerHTML = studentAboveEighteen

addButton.onclick = () => {
  let li = document.createElement("li");
  li.innerHTML = nameInput.value;
  ageInput.value < 18 ? box1.appendChild(li) : box2.appendChild(li)
  nameInput.value = "";
  ageInput.value = "";
}