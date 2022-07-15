import React from "react";
import { Link } from 'react-router-dom';
export default class Nav extends React.Component
{
    render(){
        return(
            <div>
                   <nav class="navbar navbar-expand-lg navbar-light bg-light nava1">
        <a class="navbar-brand" href="#">
          <p >MansCarCare</p></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
              <li class="nav-item">
                {/* <a class="nav-link col-md" href="#">service</a> */}
              </li>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Vadavlli</a>
                <a class="dropdown-item" href="#"></a>
                <div class="dropdown-divider">R S Puram</div>
                <a class="dropdown-item" href="#">Gandhi Park</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          
          <div>
          <Link to='/component/login'><button class="btn btn-outline-success my-2 my-sm-0">signin/Login</button>
          </Link></div>
        </div>
      </nav>
            </div>
        );

    }
}