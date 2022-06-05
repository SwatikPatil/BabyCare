import React, { Component } from "react";

export default class CurrentOpenings extends Component {

  render(){
  return (
<div className="container">
            <div className="row">
                 <div className="col-lg-10 mx-auto mb-4">
                    <div className="section-title text-center ">
                       <br/>
                        <h3 className="top-c-sep">Grow your career with us</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="career-search mb-60">

                        <form action="#" className="career-form mb-60">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 my-3">
                                    <div className="input-group position-relative">
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 my-3">
                                    <div className="select-container">
                                        <select className="custom-select">
                                            <option>Location</option>
                                            <option value="1">Jaipur</option>
                                            <option value="2">Pune</option>
                                            <option value="3">Bangalore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 my-3">
                                    <div className="select-container">
                                        <select className="custom-select">
                                            <option>Select Job Type</option>
                                            <option value="1">Baby Sitter</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 my-3">
                                </div>
                            </div>
                        </form>

                        <div className="filter-result">
                            <p className="mb-30 ff-montserrat">No Job Openings Currently</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
  );
}
}
