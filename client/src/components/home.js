import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {reactLocalStorage} from 'reactjs-localstorage';

export default class Home extends Component {

 componentDidMount() {
    let username = reactLocalStorage.get('username',true);
    let loggedIn = reactLocalStorage.get('loggedIn',true);
    console.log(loggedIn);
    if (loggedIn === "true")
    {
      var x = document.getElementById("login");
      x.innerHTML = username;
      x.href = "";

      var y = document.getElementById("signup");
      y.innerHTML = "Logout";
      y.href = "/sign-out";

    }

 }

    render() {
       const header= {
            backgroundImage: "url(../images/bg.jpg)" 
        }
        return (
 <div className="page-header header-filter" data-parallax="true" style={header}>
        <div className="container">
            <div className="row">
    			<div className="col-md-10">
    				<h1 className="title">YOUR SEARCH FOR RENTED CLOTHES AND TOYS STARTS HERE.</h1>
                    <h4>Many of the baby clothes are thrown away because people do not realise that they can be rented and reused by others. While others have a lot of clothes and toys for their babies the simple people can only afford food.</h4>
                    <h4>This app is very important for society because it helps the people who really needs help.This is an app for renting,and babysittin opportunites.Clothes/Toys are very expensive and not everybody can afford them especially when you have to buy clothes from 0 to 3 months because the babies growing fast .Here in our platform one can find not just clothes but also baby objects:bed,toys,car chair and other wherein one can only use them for respective months by paying minimal amount and give them back to the owner when the rent period is over</h4>
    		</div>
            </div>
        </div>
    </div>
        );
    }
}
