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
