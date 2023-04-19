import React from "react";
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: " ",
            lastName: " ",
            age: 0,
            height: 0,
            fullName: " "
        }   
    }
    
    // handleFirstName=(event)=>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastName=(event)=>{
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    
    // handleAge=(event)=>{
    //     this.setState({
    //         age: event.target.value
    //     })
    // }

    handleChange=(event)=>{
        this.setState({
            ...this.setState,
           [event.target.name]: [event.target.value]
        })
    }



    render(){
        return(
        <center>
        <p className="fName">First Name: {this.state.firstName} </p>
        <p className="lName">Last Name: {this.state.lastName}</p>
        <p className="age"> Age: {this.state.age}</p> 
        <p className="age"> Height: {this.state.height}</p> 
        <p>full Name: {this.state.firstName} {this.state.lastName} </p>

        <label htmlFor="firstName"className="fName">
          FirstName:   <input type="text"  name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
          <br /><br />
        </label>
        <label htmlFor="lastName">
           LastName:  <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
        </label><br /><br />

        <label htmlFor="age">
          Age:   <input type="text" name="age" id="age" value={this.state.age} onChange={this.handleChange}/>
        </label> <br /><br />

        <label htmlFor="height">
          Height:   <input type="text" name="height" id="height" value={this.state.height} onChange={this.handleChange}/>
        </label>
        </center>
        )
    }
   
}
export default Footer;