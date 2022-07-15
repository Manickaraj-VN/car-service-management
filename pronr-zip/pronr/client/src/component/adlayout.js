import React from "react";
import {Link} from 'react-router-dom';
export default class Adlay extends React.Component{
    render(){
        return(
            <> 
            <nav class="nav nav-pills nav-fill">
              <a class="nav-item nav-link" href="/admin">Dashboard</a>
              <a class="nav-item nav-link" href="/employee">Galary</a>
              <a class="nav-item nav-link" href="#">pages</a>
              <a class="nav-item nav-link" href="#">Add Credentials</a>
              <a class="nav-item nav-link" href="#">Delevery report</a>
              <a class="nav-item nav-link" href="#">graph</a>
              <a class="nav-item nav-link" href="#">Tables</a>
              <a class="nav-item nav-link disabled" href="#">Disabled</a>
            </nav>
            
            </>
        );
    }
}