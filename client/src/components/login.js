import React, { Component } from "react";
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


export default class Login extends Component {


 constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuthenticated: false 
    }
  }

 handleSubmit(e) {
  e.preventDefault();

  axios({
    method: "POST",
    url:"http://localhost:3001/signin",
    data:  this.state
  }).then((response)=>{
    if (response.status === 200) {
      var x = document.getElementById("login");
      x.innerHTML = this.state.username;
      x.href = "";

      var y = document.getElementById("signup");
      y.innerHTML = "Logout";
      y.href = "/sign-out";

      reactLocalStorage.set('username', this.state.username);
      this.resetForm()
      reactLocalStorage.set('loggedIn', this.state.isAuthenticated);
      this.props.history.push("/home");
    } else if(response.data.status === 'fail') {
      alert("Login Failed")
    }
  },(error) => {
    console.log(error);
   });
}

resetForm(){
    this.setState({username: '', password: '',isAuthenticated: true})
  }


    render() {
        return (
            <div className="auth-wrapper">
        <div className="auth-inner">
	   <form id="login-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" name="username" className="form-control" placeholder="Username" value={this.state.username} onChange={this.onuserNameChange.bind(this)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="password" value={this.state.password} onChange={this.onPasswordChange.bind(this)} />
                </div>

		 <button type="submit" className="btn btn-primary">Login</button>
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

}
