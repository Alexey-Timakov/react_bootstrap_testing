// import * as React, { Component } from "react";
import * as React from "react";

import Countries from "./Countries";
import Alerts from "./Alerts";
import Alert from "react-bootstrap/Alert";
import "../styles/Main.css";

// class Main extends Component {
//     render () {
//         return (
//             <main>
//                 <div>
//                     <h1>Main H1 title</h1>
//                 </div>
//                 <Countries />
//             </main>
//         )
//     }
// }

function Main () {

    let alertText = <b>This is an alert bold text</b>;
    return (
        <main>
            <Alerts>
                {alertText}
                <Alert variant = "warning">Warning {alertText}</Alert>
                <Alert variant = "info">Info {alertText}</Alert>
            </Alerts>
            <div>
                <h1>Main H1 title</h1>
            </div>
            <Countries />
        </main>
    )
}

export default Main;