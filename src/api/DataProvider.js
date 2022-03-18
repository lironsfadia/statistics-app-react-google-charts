
import React, { Component, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { getRequestContext } from './Context'

export function DataProvider({ calculator : Calculator, url }){
    const [data, setData] = useState(null);

    useEffect(() =>{
        const updateData = () => {
            axios.get(url).then(response => {
                console.log("SUCCESS", response)
                setData(response.data)
            }).catch(error => {
                console.log(error)
            })
          }

          const timer = setInterval(() => {
            updateData()
          }, 10000);

          updateData();

          return ()=> clearInterval(timer) 
    },[url])

    const { Provider } = getRequestContext;

    return(
        <Provider value={data}>
            <Calculator />
        </Provider>
    )
}

DataProvider.propTypes = {
    calculator: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
};

export default DataProvider;