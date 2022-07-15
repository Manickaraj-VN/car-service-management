import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Layouts from './layout';
import Log from './component/login';
import Admin from './component/admin';
import Staff from './component/staff';
import Newuser from './component/new_user';
import Emp from './component/employee';
import Vec from "./component/vec";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts/>}></Route>
        <Route path='/component/login' element={<Log/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/staff' element={<Staff/>}/> 
        <Route path='/new_user' element={<Newuser/>}/>
        <Route path='/employee' element={<Emp/>}/>
        <Route path='/vec' element={<Vec/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    );
  }
}



