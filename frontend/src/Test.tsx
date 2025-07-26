import  React , {useState,useEffect} from 'react'

type PersonalInfo = {
    name:string;
    age:number;

}

export default function Test(props:PersonalInfo){

     const [name ,setName ] = useState<String>(props.name);
     const [age , setAge ] = useState<number>(props.age);

    return (
        <>
            <h1>Hello , {name} </h1>
            <h1>You 're', {age | 0 } years old </h1>
        
        </>

    )


}