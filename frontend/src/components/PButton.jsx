import React,{useState,useEffect} from 'react';
import {Button} from 'primereact/button'
import  {DataTable} from 'primereact/datatable'
import  {Column} from 'primereact/column'
import {Panel} from 'primereact/panel'



class Employee {
    constructor(idNo ,name,gender,email){
        this.idNo = idNo ;
        this.name = name;
        this.gender = gender;
        this.email = email;
    }

}

export default function PButton(){

    const [employees,setEmployees] = useState([]);
   
    useEffect(()=>{
        fetch("http://localhost:8080/employee")
        .then(res => res.json())
        .then((data)=> {
            if(data!==null){
                 setEmployees(JSON.parse(data))
            }
           
        })
        .catch((e)=>{
            console.error(e);
        })
    },[]);

    const [buttonLabel,setButtonLabel] = useState('default');

    return (
        <>
        <DataTable value={employees} paginator row={5} rowsPerPageOptions={[5,10,30,50,100]}>
            <Column field="idNo" header="Id No."/>
            <Column field="name" header="Name"/>
            <Column field="gender" header="Gender"/>
            <Column field="email" header="Email"/>
        </DataTable>

        <Button label={buttonLabel}/>
        </>
    );



}