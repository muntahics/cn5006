# Name: MD Muntahi Hossain  
# Student ID: 2874263
My Reflection for week2's learning:

This week was about MongoDB and How to use it using query and GUI (Mongo DB Compass). It was about how to run CRUD operations find, insert, update, and delete a document. How to group by running aggregation queries.
Today we were learning how to interact with the MongoDB Database.

I have learnt about the functions for interacting with MongoDB Database. How to filter, update, delete and process the database information.
I have also learnt about the Mongo DB Atlas which is a cloud based Mongo DB server. The aggregation functions were helpful for processing the data.


## Week3 Portfolio Exercise
### index.js
```javascript
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
```

### StudentInfo.js
```javascript
const dateOfBirth = "12/12/1980"

const getStudentName = ()=>{
    return ("Muntahi")
}

const getCampusName = ()=>{
    return ("UEL Campus")
}

//exporting variables and functions outside this module

exports.getName = getStudentName
exports.Location = getCampusName
exports.dob = dateOfBirth

//How to export function with pararmeters
exports.Studentgrade = (marks)=>{
    if(marks>50 && marks<70) return("B grade")
    else return("A grade")
}
```

### Person.js

```javascript
class Student{
    constructor(name, age, email){
        this.name = name
        this.email = email
        this.age = age
    }

    getPersonInfo(){
        return{
            Name: this.name,
            Age: this.age,
            Email: this.email
        }
    }
}
module.exports = Student
```

### Execrise4.js

```javascript
os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
```

## Week3 Portfolio Screenshot
### index
<img width="708" height="250" alt="screenshot index" src="https://github.com/user-attachments/assets/23f86f31-eb76-4b77-8aeb-fbc1b83b3b7e" />

### Exercise4
<img width="816" height="735" alt="Exercise 4" src="https://github.com/user-attachments/assets/5e463bef-4a56-4fbc-8dc3-253a1e0a25b3" />

