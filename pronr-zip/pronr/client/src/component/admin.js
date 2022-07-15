import React from "react";
import {Link} from 'react-router-dom';
import Adlay from "./adlayout";
import Vec from "./vec";

export default class Admin extends React.Component{
    render(){
        return(
            <> 
            <Adlay/>
            <Vec/>
            
            </>
        );
    }
}