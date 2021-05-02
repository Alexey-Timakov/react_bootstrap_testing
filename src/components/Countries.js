import React, {useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";

import Country from "./Country.js";

import "../styles/Countries.css";

function Countries () {

    const [countries, setCountries] = useState([]);
    if (!countries.length) {
        axios.get("https://restcountries.eu/rest/v2/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
    
    }

    return (
        <Table striped bordered hover className="countries">
            <thead><tr><th>Country</th><th>Capital</th><th>Add/Remove</th></tr></thead>
            <tbody>
                {countries.map(country => <Country country={country} key="country.alpha3Code"/>)}
            </tbody>
        </Table>
    )
}

export default Countries;