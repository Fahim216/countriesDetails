import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';


const CountryDetail = () => {
    const{name}=useParams();
    const [Country,setCountry]=useState({});
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]));

    },[name])
   
    return (
       
     <div className="fahim">
       <div> <img className='dev' src={Country.flag} alt="" /></div>
        <div>
         <p><h2>This is {Country.name}</h2></p>
         <h2>Country capital::{Country.capital}</h2>
         <p><b>population:</b>{Country.population}</p>
         <h3>Thanks for visiting Our site ...</h3>
         </div> 
     </div>
        
        
    );
};

export default CountryDetail;