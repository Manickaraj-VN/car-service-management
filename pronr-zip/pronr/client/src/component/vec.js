import React from "react";
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
export default class Vec extends React.Component
{
    state={
        v_name:"",
        v_model:"",
        v_type:"",
        v_reg:"",
        v_chase:"",
        v_eng:"",
        fuel:"",
        ins:"",
        fc:""
    } 
    getv_name=(Event)=>{
        this.setState({v_name : Event.target.value});
        console.log(this.state.v_name);

    }
    getv_model=(Event)=>{
        this.setState({v_model : Event.target.value});
        console.log(this.state.v_model);

    }
    getv_type=(Event)=>{
        this.setState({v_type : Event.target.value});
        console.log(this.state.v_type);

    }
    getv_reg=(Event)=>{
        this.setState({v_reg : Event.target.value});
        console.log(this.state.v_reg);

    }
    getv_chase=(Event)=>{
        this.setState({v_chase : Event.target.value});
        console.log(this.state.v_chase);

    }
    getv_eng=(Event)=>{
        this.setState({v_eng : Event.target.value});
        console.log(this.state.v_eng);

    }
    getfuel=(Event)=>{
        this.setState({fuel : Event.target.value});
        console.log(this.state.fuel);

    }
    getins=(Event)=>{
        this.setState({ins : Event.target.value});
        console.log(this.state.ins);

    }
    getfc=(Event)=>{
        this.setState({fc : Event.target.value});
        console.log(this.state.fc);

    }
    addsub(){
        const vecdata={
            v_name : this.state.v_name ,
            v_model : this.state.v_model,
            v_type : this.state.v_type,
            v_reg : this.state.v_reg,
            v_chase : this.state.v_chase,
            v_eng : this.state.v_eng,
            fuel : this.state.fuel,
            ins : this.state.ins,
            fc : this.state.fc
           
        };
        
        Axios.post('http://localhost:3001/vec',vecdata).then((response)=>{
            console.log(response);
        }
    
)}

    render()
    {
        return(
            <>
                <div className="col-12">
                    <form class="row g-3 needs-validation " novalidate>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom01" class="form-label">Vehical Name</label>
                            <input onChange={this.getv_name} type="text" class="form-control" id="validationCustom01" placeholder="Tata" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom02" class="form-label">vechial Model</label>
                            <input onChange={this.getv_model} type="text" class="form-control" id="validationCustom02" placeholder="indica" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                        <label for="validationCustom043" class="form-label">Vehical Type</label>
                            <select onChange={this.getv_type} class="form-control" id="validationCustom043" required>
                            <option selected disabled value="">Choose</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Jeep">Jeep</option>
                            <option value="SUV">SUV</option>
                            <option value="MUV">MUV</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Convertibles">Convertibles</option>
                            <option value="Pickup Trucks">Pickup Trucks</option>
                            </select>
                            <div class="invalid-feedback">
                            Please select a valid state.
                            
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom011" class="form-label">Register Number</label>
                            <input onChange={this.getv_reg} type="text" class="form-control" id="validationCustom011" placeholder="Register Number" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom021" class="form-label">Engine Number</label>
                            <input onChange={this.getv_eng} type="text" class="form-control" id="validationCustom021" placeholder="Engine Number" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-4">
                            <label for="validationCustom051" class="form-label">Chase Number</label>
                            <input onChange={this.getv_chase} type="text" class="form-control" id="validationCustom051" placeholder="ChaseNumber" required/>
                            <div class="invalid-feedback">
                            Please provide a valid chase Number.
                            </div>
                            </div>
                            
                        <div class="col-md-4 mb-4">
                            <label for="validationCustom052" class="form-label">Insurance upto</label>
                            <input onChange={this.getins} type="date" class="form-control" id="validationCustom052" placeholder="ChaseNumber" required/>
                            <div class="invalid-feedback">
                            Please provide a valid chase Number.
                            </div>
                            </div>    
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom03" class="form-label">FC Date</label>
                            <input onChange={this.getfc} type="date" class="form-control" id="validationCustom03" required/>
                            <div class="invalid-feedback">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom04" class="form-label">Fuel Type</label>
                            <select onChange={this.getfuel} class="form-control" id="validationCustom04" required>
                            <option selected disabled value="">Choose</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="EV">EV</option>
                            </select>
                            <div class="invalid-feedback">
                            Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationCustom05" class="form-label">Last service</label>
                            <input type="text" class="form-control" id="validationCustom05" required/>
                            <div class="invalid-feedback">
                            Please provide a valid zip.
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <button class="btn btn-primary" onClick={this.addsub.bind(this)} type="submit">Submit form</button>
                        </div>
                    </form>
                    </div>
            </>
        );
    }
}