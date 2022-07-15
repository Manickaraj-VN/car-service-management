import React from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
export default class Log extends React.Component
{
    state={
        username : '',
        password : ''
    };
    getusername=(Event)=>{
        this.setState({username : Event.target.value});
        console.log(this.state.username);
    }
    getpassword=(Event)=>{
        this.setState({password : Event.target.value});
        console.log(this.state.password);
    }
    login(){
        const datas={
            username : this.state.username,
            password : this.state.password
        };
        Axios.post('http://localhost:3001/login',datas).then((response)=>{
            console.log(response);
            // console.log(response.data.status);
            let a=response.data.status;
            let b=response.data.role;
            let z='invalid';
            if(a=='pass'){
                if(b=='admin'){
                    window.location.href='/admin';
                }
                else if(b=='staff'){
                    window.location.href='/staff';
                   
                }
                
            }
            else if(a=='err'){
                alert(z);
                
            }
            // console.log(response.data[0].username);
            // let c =response.data[0].username;
            // if(c){
            //     if(c=='admin'){
            //         window.location.href='/admin';
            //     }
            //     else if(c=='staff')
            //     {
            //         window.location.href='/staff';
            //     }
               
            // }
            // else {
            //     // alert('wrog')
            //        alert(response.data.status);
            // }
        });
    }

    render()
    {
        return(
            <>
                <div class="lo_card1 d-flex flex-row">
                    <div class="d-flex flex-column">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">User Id</label>
      <input type="text" class="form-control" placeholder="Enter your user id" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.getusername}/>
      <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-3">
      <label for="userPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" placeholder="Enter your password" id="userPassword1" onChange={this.getpassword}/>
    </div><br/>
    {/* <!-- <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Keep me Logged in</label>
    </div> --> */}
    <div>
    <button type="submit" class="btn btn-primary mr-3" onClick={this.login.bind(this)}>Login</button>
    <Link to='/new_user'>
     <button type="submit" id="logbtn" class="btn btn-primary">New Account</button></Link>
    
    <label class="form-check-label" for="logbtn" >New User Create Account</label>
    </div>
    </div>
  
</div>
    
            </>
        );
    }
}