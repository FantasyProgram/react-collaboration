import React from 'react'
import {Link} from 'react-router-dom'

import PButton from '../components/PButton'
import InputField from '../components/InputField'
import Test from './../Test'

export default function Browse() {


    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <PButton />
            <InputField />
            <Test name="Jane Doe" age={69}/>
        
        </>
    )


}