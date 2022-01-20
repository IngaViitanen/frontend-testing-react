import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Chat from './components/Chat';
import Name from './components/Name';
// import Dinopedia from './components/dinosaurTS/Dinopedia';
// import DropMenu from './components/DropMenu';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <header>
                <Navbar items={['Start', 'Info', 'About', 'Profile']}/>
                {/* <DropMenu /> */}
            </header>
            <Calculator />
            <Chat />
            <Name />
            {/* <Dinopedia /> */}
        </div>
    );
}

export default App;
