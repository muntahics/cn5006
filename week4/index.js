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
