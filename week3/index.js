function EmployeeInfo(name,salary){
    console.log(`Welcome ${name}! Your monthly salary is ${salary}`)
}

console.log ("This is my first programe")
var EmpName="John"
var EmpSalary= 50000
// calling of the function EmployeeInfo
EmployeeInfo(EmpName,EmpSalary)

const EmpSkills = (skills)=>{
    console.log(`Expert in ${skills}`)
}

EmpSkills(`java`)

const student = require("./StudentInfo")
const person = require("./Person")

console.log(`Student Name: ${student.getName()}`)
console.log(student.Location())
console.log(student.dob)

console.log(student.Studentgrade())
console.log(`YOur grade is ${student.Studentgrade(55)}`)

person1 = new person("Jim", "USA", "myemail@gmail.com")

console.log(`using person module`, person1.getPersonInfo())
console.log(`Program Ended`)

