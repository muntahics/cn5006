const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://muntahics:muntahicss@cluster0.mwombrx.mongodb.net/?appName=Cluster0";


mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on('error', function(err)
{
    console.log("Error occured during connection"+err)
});

db.once('connected', function() 
{
    console.log(`Connected to ${MONGO_URI}`);
});

const PersonScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age: Number, 
    Gender:String, 
    Salary:Number
})

const person_doc = mongoose.model('modelname', PersonScheme,'personCollection');



// const manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
//  ,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
//  ,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
//  { name: 'Mike',age:40,Gender:"Male",Salary:4519 }
//  ] 

//  person_doc.insertMany(manypersons).then(function(){
//  console.log("Data inserted") // Success
//  }).catch(function(error){
//  console.log(error) // Failure
//  }); 


// doc1
//  .save()
//  .then((doc1) => {
//  console.log("New Article Has been Added Into Your DataBase.",doc1);
//  })
//  .catch((err) => {
//  console.error(err);
//  });



//  person_doc.find({})
//  .sort({salary: 1})
//  .select("name Salary age")
//  .limit(10)
//  .exec()
//  .then(
//     docs => {
//         console.log("showing multiple documents")
//         docs.forEach(function(doc){
//             console.log(doc.age, doc.name)
//         })
//     }
//  )
//  .catch(err => {
//     console.error(err)
//  })

//  var givenage = 15

//  person_doc.find({Gender:"Female", age:{$gte:givenage}})
//  .sort({Salary:1})
//  .select('name Salary age')
//  .limit(10)
//  .exec()
//  .then(docs => {
//     console.log("Showing age greater than " + givenage)
//     docs.forEach(doc=>{
//         console.log(doc.age,doc.name)
//     })
//  })
//  .catch(err=>{
//     console.error(err)
//  })


// person_doc.deleteMany({age:{$gte:25}})
// .exec()
// .then(docs=>{
//     console.log("Deleted documents are: ", docs)
// })
// .catch(err=>{
//     console.error(err)
// })

person_doc.updateMany({ Gender: "Female" },{$set:{Salary:5555}})
.exec()
.then(docs=>{
console.log("update")
console.log(docs); // Success
}).catch(function(error){
console.log(error); // Failure
});