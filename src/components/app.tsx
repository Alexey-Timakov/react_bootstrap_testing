// import React, { Component } from "react";
import * as React from "react";

import "../styles/App.css"

import Header from "./header";
import Main from "./Main";

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
        <>
            <Header buttonName = {buttonName}/>
            <Main />
        </>
    )
}

export default App;