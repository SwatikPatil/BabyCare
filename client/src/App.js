import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import Logout from "./components/logout";
import ContactUs from "./components/contactus";
import CurrentOpenings from "./components/currentopenings";

export default class App extends Component{

  render(){
  return (<Router>
    <div className="App">
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
	<Navbar.Brand href="#home">BabyShop</Navbar.Brand>
	<Navbar.Toggle aria-controls="basic-navbar-nav" />
	<Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	    <Nav.Link href="/">Home</Nav.Link>
	    <NavDropdown title="Product" id="basic-nav-dropdown">
		<NavDropdown.Item href="#action/3.1">Summary</NavDropdown.Item>
		<NavDropdown.Item href="#action/3.2">Add Product</NavDropdown.Item>
	    </NavDropdown>
	    <NavDropdown title="Career" id="basic-nav-dropdown">
		<NavDropdown.Item href="/current-openings">Current Openings</NavDropdown.Item>
		<NavDropdown.Item href="#action/3.1">New Job Post</NavDropdown.Item>
		<NavDropdown.Item href="#action/3.2">Candidate Bio-Data</NavDropdown.Item>
	    </NavDropdown>
	    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
	    </Nav>
	    <Nav className="ml-auto">
	    <Nav.Link href="/">Cart</Nav.Link>
	    <Nav.Link id="login" href={"/sign-in"}>Login</Nav.Link>
	    <Nav.Link id="signup" href={"/sign-up"}>Sign Up</Nav.Link>
            </Nav>
	</Navbar.Collapse>
    </Navbar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/sign-out' component={Logout} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/current-openings" component={CurrentOpenings} />
          </Switch>
    </div></Router>
  );
 }
}
