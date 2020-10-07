import React from 'react';

const Cou = (props) => {
    const {name, capital, region, callingCodes, population} = props.val
    return (
        <div>
            <h3>Capital: {capital}</h3>
            <h3>Region: {region}</h3>
            <h3>CallingCodes: {callingCodes}</h3>
            <h1>Population: {population}</h1>
        </div>
    );
};

export default Cou;