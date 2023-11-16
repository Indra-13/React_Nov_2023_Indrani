import { useState } from "react";

function Stateprops()
{
    //create state
    const[name, setName]=useState("Indhu❤");
    const [num,setNum]=useState(12);
    const[students,setStudents]=useState({name:'Indhu',age:19});
    const nameHandler = () =>
    {
        setName("Danu❤");
    }
    const numHandler = () =>
    {
        let value=num;
        setNum(++value);
    }
    const studentHandler = () =>
    {
        let no=students.age;
        setStudents({name:"sri",age:++no});
    }
    
    return (
        <div>
            <h1>State and props</h1><hr></hr>
            <h2>HI {name}</h2>
            <h2>Number is {num}</h2>
            <h2>Student name is {students.name} and age is {students.age}</h2>
            <button onClick={nameHandler}>Change Name</button><br></br>
            <button onClick={numHandler}>Increment Number</button><br></br>
            <button onClick={studentHandler}>change age</button>
            </div>
    );
}
export default Stateprops;