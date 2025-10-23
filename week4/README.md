# Name: MD Muntahi Hossain  
# Student ID: 2874263
My Reflection for week4's learning:

This week was about express application. I created a backend with express js and completed the exercises. 
Every functions are created with express and using the REST Api I was able to access the functions.
I created the api urls with express functions and served the data on port 5000. This was an interesting exercise.
However, there is a lot to learn.


# Week4 Portfolio Exercise
```javascript
const express = require("express")
const fs = require("fs")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true})) 

app.get('/',(req,res)=>{
    res.send("Hello it is my first express application")
})

app.get('/about', (req,res)=>{
    res.send(`This is basic express application`)
})

app.get('/users/:userId/books/:bookId',(req,res)=>{
    res.send(req.params)
})

app.get('/GetStudents',(req,res)=>{
    studentdata = {}
    fs.readFile(__dirname + `/Student.json`, `utf8`, (err,data)=>{
        console.log(data);
        res.json(
            {
                'status':true, 
                'Status_Code':200,
                'requestedAt': req.localtime,
                'requrl': req.url,
                'reqestMethod': req.method,
                'studentdata': JSON.parse(data)
            }
        )
    })
})

app.get('/GetStudentid/:id',(req,res)=>{
 studentdata={}
 fs.readFile(__dirname + "/" + "Student.json", 'utf8', function (err, data) {
 var students= JSON.parse(data)
 var student=students["Student"+req.params.id]
 console.log("student",student)
 if (student)
 res.json(student)
 else
 res.json({ 'status':true, 'Status_Code':200,
 'requestedAt': req.localtime, 'requrl':req.url, 

    'requestMethod':req.method, 'studentdata':JSON.parse(data)});
  
 });
 })
 

    app.get('/studentinfo',(req,res)=>
        {
            res.sendFile('StudentInfo.html', { root: __dirname });
        }
    )

 app.post('/submit-data',(req,res)=>{
    var name = req.body.firstName + ' ' + req.body.lastName + ' '
    var Age= req.body.myAge+ ' Gender: ' + req.body.gender 
    var Qual= ' Qualification'+ req.body.Qual
    console.log(req.body.Qual) 
    res.send({
            status: true,
            message: 'form Details', data: {
            name: name, 
            age:Age, 
            Qualification:Qual
        } 
    })


 })


 

app.listen(5000,()=>{console.log(`server is running on port 5000`)})
```
## /
<img width="322" height="31" alt="image" src="https://github.com/user-attachments/assets/1a08d86b-6810-4af7-94fa-05579a2f2d3b" />

## /about
<img width="327" height="65" alt="image" src="https://github.com/user-attachments/assets/1887b2dc-ce8e-40b8-8be3-e6b7e623e031" />

## /users/33/books/123
<img width="243" height="138" alt="image" src="https://github.com/user-attachments/assets/06263cf1-7967-4eb6-9243-e86591cf283c" />

## /GetStudents
<img width="306" height="552" alt="image" src="https://github.com/user-attachments/assets/fb01c0ef-2b21-437f-99e8-0cba31fb09e7" />

## /GetStudentid/1
<img width="267" height="205" alt="image" src="https://github.com/user-attachments/assets/4d047588-4f43-4c44-82a6-918902a174f0" />

## /studentinfo
<img width="635" height="751" alt="image" src="https://github.com/user-attachments/assets/9885599d-140c-4f55-9f70-69bde86e5dcd" />

## /studentinfo -after submit-data
<img width="412" height="228" alt="image" src="https://github.com/user-attachments/assets/d39a49d5-8863-4f95-aacb-6c0d573bce98" />






