import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

 handleSubmit(e) {
  e.preventDefault();

  axios({
    method: "POST",
    url:"http://localhost:3001/signup",
    data:  this.state
  }).then((response)=>{
    if (response.status === 200) {
      alert("User Created Successfully");
      this.resetForm()
      this.props.history.push("/sign-in");
    } else if(response.data.status === 'fail') {
      alert("Sign Up Failed")
    }
  },(error) => {
    console.log(error);
   });
}

resetForm(){
    this.setState({username: '', password: '',email: ''})
  }


    render() {
        return (
            <div className="auth-wrapper">
        <div className="auth-inner">
            <form id="signup-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <br/>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onEmailChange.bind(this)} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Username"  onChange={this.onuserNameChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="password" onChange={this.onPasswordChange.bind(this)} />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
           </div>
        );
    }

  onuserNameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }


  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

}
