import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Head';
import Container from './Container';
//import Footer from './footer'


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Container />
            </div>
                
        </Router>
    );
}

export default App;
