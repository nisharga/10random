import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AllCountry.css'

const AllCountry = (props) => {
    const {name, flag, alpha2Code} = props.val
    const history = useHistory();
    const handleClick = (friendId) => {
        const url =  `/name/${friendId}`
        history.push(url)
    }
    return (
        <div className='allCountry'>
            <h4>Name: {name} ({alpha2Code})</h4>
            <img src={flag}/> <br></br>
            <Link className='details' to={`/country/${name}`}>
                Details
            </Link>
        </div>
    );
};

export default AllCountry;