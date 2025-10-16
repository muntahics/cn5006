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