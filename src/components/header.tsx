// import React, { Component } from "react";
import * as React from "react";
import "../styles/Header.css";

// class Header extends Component {
//     render () {
//         return (
//                 <header>
//                     This is a Header
//                     <button className={buttonClass} onClick={buttonClickFunc}>{buttonName}</button>
//                 </header>
//         )
//     }
// }

function Header (props) {
    console.log(props.buttonName);
    // let buttonName = "NNName of the Button!";
    let buttonClass = "header__button";
    // let count = 0;
    let [count, setNewCount] = React.useState(0);

    const buttonClickFunc = (e) => {
        setNewCount(count + 1);
        console.log("Hello, bro!", e.target, count);
    };

    return (
        <header>
            This is a Header
            <button className={buttonClass} onClick={buttonClickFunc}>{props.buttonName} clicked {count} times</button>
        </header>
    )
}

export default Header;