import React, {useReducer, useState} from "react";
function Frag(){
    let initialState ={
    // firstName: "",
    // lastName: "",
    // age: "",
    // phoneNumber: "",
    // email: ""
    }
    // const[data, setData] = useState(initialState);
    const[firstName, setfirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[age, setAge] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[email, setEmail] = useState("");

    function handleChange(event){
        if(event.target.name === 'firstName'){
            setfirstName(event.target.value)
        }
        else if(event.target.name === 'lastName'){
            setLastName(event.target.value)
           
        }
        else if(event.target.name === 'email'){
            setEmail(event.target.value);
        }
        else if(event.target.name === 'age'){
            setAge(event.target.value);
        }

    }

    return(
        <center>
        <React.Fragment>
            <div className="ptags">
                <p className="one">First Name: {firstName}</p>
                <p className="two">Last Name:  {lastName}</p>
                <p className="three">Email: {email}</p>
                <p className="four">Age: {age}</p>
                <p className="phoneNumber">phoneNumber: {phoneNumber}</p>
                <p className="email">email: {email}</p>
                <p></p>
            </div>
            <label htmlFor="">
                <input type="text" name="firstName" id="fName" placeholder="enter your first Name" value={firstName}
                onChange={handleChange}/>
                <br /><br />
            </label>
            <label htmlFor="">
                <input type="text" name="lastName" id="lName" placeholder="enter your last Name" value={lastName}
                onChange={handleChange}/>
                <br /><br />
            </label>
            <label htmlFor="">
                <input type="text" name="email" id="email" placeholder="enter your email" value={email}
                onChange={handleChange}/>
                <br /><br />
            </label>
            <label htmlFor="">
                <input type="text" name="age" id="age" placeholder="enter your age" value={age}
                onChange={handleChange}/>
            </label>
        </React.Fragment>
        </center>
    )
}
export default Frag;