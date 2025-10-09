# Name: MD Muntahi Hossain  
# Student ID: 2874263
My Reflection for week2's learning:

This week was about MongoDB and How to use it using query and GUI (Mongo DB Compass). It was about how to run CRUD operations find, insert, update, and delete a document. How to group by running aggregation queries.
Today we were learning how to interact with the MongoDB Database.

I have learnt about the functions for interacting with MongoDB Database. How to filter, update, delete and process the database information.
I have also learnt about the Mongo DB Atlas which is a cloud based Mongo DB server. The aggregation functions were helpful for processing the data.


# Week2 Portfolio Exercise
```javascript
[
  {
    $match: {
      education: "Master"
    }
  },
  {
    $group: {
      _id: "$maritalstatus",
      Avg: {
        $avg: "$age"
      },
      MinAge: {
        $min: "$age"
      },
      MaxAge: {
        $max: "$age"
      },
      AvgSalary: {
        $avg: "$salary"
      },
      MinSalary: {
        $min: "$salary"
      },
      MaxSalary: {
        $max: "$salary"
      },
      Count: {
        $sum: 1
      }
    }
  }
]
```
# Week2 Portfolio Screenshot
![Screenshot](/week2/screenshot.png)

