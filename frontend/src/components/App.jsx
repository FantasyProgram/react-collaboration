import React,{Component}from 'react';
import InputField from './InputField.jsx';
import PButton from './PButton.jsx';
import {PrimeReactProvider} from 'primereact/api'

import 'primereact/resources/themes/lara-light-blue/theme.css'; // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
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
            <>
                <PButton/>
              <h1>{message}</h1>
              <InputField/>
            </>
          
        );
    }
}