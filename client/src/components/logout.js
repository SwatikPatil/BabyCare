import React, { Component } from "react";
import {reactLocalStorage} from 'reactjs-localstorage';


export default class Logout extends Component {


 constructor(props) {
    super(props);
  }

  componentDidMount(){
    reactLocalStorage.clear();
    this.props.history.push("/sign-in");
  }

  render(){
     return(<div/>);
 }
}
