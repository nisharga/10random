import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCountry.css'
import Cou from './Cou'

const SingleCountry = (props) => {
    // const {name} = props.val
    const {CountryCode} = useParams();

    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${CountryCode}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])

   
    return (
        <div className="single">
            <h2>Country: {CountryCode}</h2>
            <h4></h4>
            {
             country.map(data => <Cou val={data}></Cou>)
            }
               
            
            
        </div>
    );
};

export default SingleCountry;