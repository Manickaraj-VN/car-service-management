import React from "react";
import Adlay from "./adlayout";
import Axios from 'axios';
export default class Emp extends React.Component
{
    state={
        f_name:"",
        l_name:"",
        age:"",
        ad:"",
        ci:"",
        zip:"",
        id_n:"",
        id_p:"",
        exp:"",
        dept:"",
        ph:"",
        em:"",
        u_n:"",
        psd:""
    }
    getf_name=(Event)=>{
        this.setState({f_name : Event.target.value});
        console.log(this.state.f_name);

    }
    getl_name=(Event)=>{
        this.setState({l_name : Event.target.value});
        console.log(this.state.l_name);

    }
    getage=(Event)=>{
        this.setState({age : Event.target.value});
        console.log(this.state.age);

    }
    getad=(Event)=>{
        this.setState({ad : Event.target.value});
        console.log(this.state.ad);

    }
    getci=(Event)=>{
        this.setState({ci : Event.target.value});
        console.log(this.state.ci);

    }
    getzip=(Event)=>{
        this.setState({zip : Event.target.value});
        console.log(this.state.zip);

    }
    getid_n=(Event)=>{
        this.setState({id_n : Event.target.value});
        console.log(this.state.id_n);

    }
    getid_p=(Event)=>{
        this.setState({id_p : Event.target.value});
        console.log(this.state.id_p);

    }
    getexp=(Event)=>{
        this.setState({exp : Event.target.value});
        console.log(this.state.exp);

    }
    getdept=(Event)=>{
        this.setState({dept : Event.target.value});
        console.log(this.state.dept);

    }
    
    getph=(Event)=>{
        this.setState({ph : Event.target.value});
        console.log(this.state.ph);

    }
    getem=(Event)=>{
        this.setState({em : Event.target.value});
        console.log(this.state.em);

    }
    getu_n=(Event)=>{
        this.setState({u_n : Event.target.value});
        console.log(this.state.u_n);

    }
    getpsd=(Event)=>{
        this.setState({psd : Event.target.value});
        console.log(this.state.psd);

    }
    ent(){
                const empdata={
                    // password : this.state.password
                    f_name : this.state.f_name,
                    l_name : this.state.l_name,
                    age : this.state.age,
                    ad : this.state.ad,
                    ci : this.state.ci,
                    zip : this.state.zip,
                    id_n : this.state.id_n,
                    id_p : this.state.id_p,
                    exp : this.state.exp,
                    dept : this.state.dept,
                    ph : this.state.ph,
                    em : this.state.em,
                    u_n : this.state.u_n,
                    psd : this.state.psd,
                };
                Axios.post('http://localhost:3001/employee',empdata).then((response)=>{
                    console.log(response);
                }
    )}


    render(){
        return(
            <>
            <Adlay/>
            <form className="container">
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input onChange={this.getf_name} type="text" class="form-control" id="validationDefault01" placeholder="First name"  required/>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input onChange={this.getl_name} type="text" class="form-control" id="validationDefault02" placeholder="Last name"  required/>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefaultUsername">Age</label>

                        <input onChange={this.getage} type="text" class="form-control" id="validationDefaultUsername"  placeholder="age" required/>
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                        <select onChange={this.getid_n} class="custom-select mr-sm-2 form-control" id="inlineFormCustomSelect">
                            <option class="form-control" placeholder="id proof">Id proof</option>
                            <option value="Aadhar card">one</option>
                            <option value="Licience">two</option>
                            <option value="PAN Card">ee</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault021">Id proof NO</label>
                    <input onChange={this.getid_p}  type="text" class="form-control" id="validationDefault021" placeholder="id proof number"  required/>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefaultUsername1">mail id</label>
                    <div class="input-group">
                        <input onChange={this.getem} type="text" class="form-control" id="validationDefaultUsername1"  aria-describedby="inputGroupPrepend21" required/>
                        <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend21">@gmail.com</span>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-2 mb-3">
                        <label for="validationDefaultUsername">User Name</label>

                        <input onChange={this.getu_n} type="text" class="form-control" id="validationDefaultUsername"  placeholder="user name" required/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="validationDefault0123">Password</label>
                        <input onChange={this.getpsd} type="password" class="form-control" id="validationDefault0123" placeholder="psd"  required/>
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationDefault03">Address</label>
                    <input onChange={this.getad} type="text" class="form-control" id="validationDefault03" placeholder="Address" required/>
                    </div>
                    <div class="col-md-3 mb-3">
                    <label for="validationDefault04">State</label>
                    <input onChange={this.getci} type="text" class="form-control" id="validationDefault04" placeholder="State" required/>
                    </div>
                    <div class="col-md-3 mb-3">
                    <label for="validationDefault05">Zip</label>
                    <input onChange={this.getzip} type="text" class="form-control" id="validationDefault05" maxLength={6} placeholder="Zip" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault012">Work experence</label>
                    <input onChange={this.getexp} type="text" class="form-control" id="validationDefault012" placeholder="work exp"  required/>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefault022">Dept</label>
                    <input onChange={this.getdept} type="text" class="form-control" id="validationDefault022" placeholder="Dept"  required/>
                    </div>
                    <div class="col-md-4 mb-3">
                    <label for="validationDefaultUsername2">Phone Number</label>

                        <input onChange={this.getph} type="text" class="form-control" id="validationDefaultUsername2" maxLength={10} placeholder="contact" required/>
                    </div>
                </div>
                
                <button class="btn btn-primary" onClick={this.ent.bind(this)} type="submit">Submit form</button>

                
                </form>
            </>
        );
    }
}