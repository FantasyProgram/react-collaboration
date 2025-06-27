import express ,{Router} from 'express'



class Employee {
    constructor(idNo ,name,gender,email){
        this.idNo = idNo ;
        this.name = name;
        this.gender = gender;
        this.email = email;
    }

}

const employeeRouter = Router();

employeeRouter.get("/", (req , res)=>{

    const employees = [
           new Employee(123455,"Lanz","Male","company@email.com"),
           new Employee(123455,"Lanz","Male","company@email.com"),
           new Employee(123455,"Lanz","Male","company@email.com"),
           new Employee(123455,"Lanz","Male","company@email.com"),
           new Employee(123455,"Lanz","Male","company@email.com")
    ];

    console.log("get employees");
    res.json(JSON.stringify(employees));


});

export default employeeRouter;
