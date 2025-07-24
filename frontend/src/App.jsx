import React, { Component } from 'react';
import InputField from './components/InputField.jsx';
import PButton from './components/PButton.jsx';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './pages/Home.jsx';
import Browse from './pages/Browse.jsx'
import ProductPage from './pages/ProductPage.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello from the otherside"
        };
    }

    render() {
        const { message } = this.state;
        return (
            <PrimeReactProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Browse />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<ProductPage />} />
                    </Routes>
                </BrowserRouter>
            </PrimeReactProvider>
        );
    }
}
