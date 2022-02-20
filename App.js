// import logo from './logo.svg';
// import './App.css';


import Topbar from './components/topbar/topbar';
// import Header from './components/header/header';

// import { Box } from '@material-ui/core';


// import Home from'./components/topbar/home';


import Login from './pages/home/login/login';
// import Register from './pages/home/register/register';
// import{ BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Ditenv from 'dotenv';
function App() {
 
  return (
 <>
  
  <Login/>
  

</>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
