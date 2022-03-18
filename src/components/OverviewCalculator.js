import React, { Component, useState, useContext, useEffect } from 'react';
import { isValid } from '../helpers/helper';
import GeoChart from '../layout/GeoChart';
import InputBox from '../layout/InputBox';
import { getRequestContext } from '../api/Context'

export function OverviewCalculator() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [countriesUsersLIst, setCountriesUsersLIst] = useState([
                                                        ['Country', 'Popularity'],
                                                      ]);
  const geoData = useContext(getRequestContext);
  
  useEffect(() =>{
    let usersCounter = 0;
    if(geoData) {
      geoData.map(current => {
        console.log(geoData)
        if(isValid(current.country) && typeof current.users === 'number' && current.users > 0){
          setCountriesUsersLIst(countriesUsersLIst => [...countriesUsersLIst, [current.country, current.users]]);
          usersCounter += current.users;
        }
      });
    }
    setTotalUsers(usersCounter);
  },[geoData])

  const prepareDisplay = () => {
    return (
      <div className="over-view-container">
        <InputBox data={String(totalUsers)}/>
        <GeoChart geoData={countriesUsersLIst}/>
      </div>
    );
  }
  return (
    <div>
    { geoData ? prepareDisplay() : null }
  </div>
  );
}
 
export default OverviewCalculator;