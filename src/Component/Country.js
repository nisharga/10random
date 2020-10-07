import React, { useEffect, useState } from 'react';
import './Country.css'
import AllCountry from './AllCountry'

const Country = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div>
         <h3>Total COuntry {country.length}</h3>
         {
             country.map(data => <AllCountry val={data}></AllCountry>)
         }
        </div>
    );
};

export default Country;