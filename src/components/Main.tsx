// import * as React, { Component } from "react";
import * as React from "react";

import Countries from "./Countries";

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
    return (
        <main>
            <div>
                <h1>Main H1 title</h1>
            </div>
            <Countries />
        </main>
    )
}

export default Main;