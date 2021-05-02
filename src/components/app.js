// import React, { Component } from "react";
import React from "react";

import "../styles/App.css"

import Header from "./header.js";
import Main from "./Main.js";

// class App extends Component {
//     render () {
//         return (
//             <React.Fragment>
//                 <Header buttonName = {"NNName of the Button!"} />
//                 <Main />                
//             </React.Fragment>
//         )
//     }
// }

function App () {
const buttonName = "NNName of the Button!";
    return (
        <React.Fragment>
            <Header buttonName = {buttonName}/>
            <Main />
        </React.Fragment>
    )
}

export default App;