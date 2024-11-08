console.log("hello");
const students = [
    { name: "Alice Johnson", matric_number: "MAT12345", age: 10 },
    { name: "Bob Smith", matric_number: "MAT12346", age: 23 },
    { name: "Carol Williams", matric_number: "MAT12347", age: 11 },
    { name: "David Brown", matric_number: "MAT12348", age: 12 },
    { name: "Eva Davis", matric_number: "MAT12349", age: 14 },
    { name: "Frank Miller", matric_number: "MAT12350", age: 50 },
    { name: "Grace Lee", matric_number: "MAT12351", age: 40 },
    { name: "Henry Wilson", matric_number: "MAT12352", age: 18 },
    { name: "Ivy Clark", matric_number: "MAT12353", age: 39 },
    { name: "Jack White", matric_number: "MAT12354", age: 50 }
];

const randNickNames = [
    "ebinpejo",
    "scorpion",
    "goat",
    "ajanlekoko",
    "tPain",
    "olu maintain",
    "ghost",
    "amaka",
    "themmy",
    "obo pupa",
    "adaripon"
]


const newStudents = students.map((eachStudent, index) => {

    return {
        ...eachStudent,
        nick_name: randNickNames[index],
    };
});

const isEligibleStudents = students.filter((eachStudent) => {
    return eachStudent.age >= 18;
})
const isnotEligibleStudents = students.filter((eachStudent) => {
    return eachStudent.age < 18;
})

console.log("students=>", students);

console.log("isEligibleStudents=>", isEligibleStudents);








