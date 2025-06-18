import React,{Component}from 'react';


export default class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            message:"Hello from the otherside"
        }
    }

    render(){
        const {message} = this.state;
        return(
            <h1>{message}</h1>
        );
    }
}