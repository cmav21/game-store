import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Body from './components/Body';

export default class LandingPage extends Component{
    render(){
        return(
            <div className="landing-page">
                <Header></Header>
                <Body/>
                <Footer></Footer>
            </div>
        );
    }
}