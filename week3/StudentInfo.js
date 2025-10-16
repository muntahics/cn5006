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