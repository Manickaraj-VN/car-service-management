import React from "react";
import Nav from './component/home';
import Footer from "./component/footer";
import Body from "./component/boody";
export default class Layouts extends React.Component
{
    render(){
        return(
            < div className="col-12">
            <Nav/>
            <Body/>
            <Footer/>
            </div>
        );

    }
}