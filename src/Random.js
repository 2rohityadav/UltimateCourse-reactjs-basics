import React, { useState } from 'react';
import InteractiveView from './InteractiveView';


export default class Random extends React.Component{
    state = {
        randomNumber: 0
    };
    onRandomiseHandler = () => this.setState({
        randomNumber: Math.floor(Math.random() * 1000)
    })
    render(){
        return(
    <InteractiveView value={this.state.randomNumber} onAction={this.onRandomiseHandler}>
        Randomize
    </InteractiveView>
    );
    }
}