import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Alert from '@mui/material/Alert';
import { DataSender } from '../api/DataSender';
import MyButton from '../layout/MyButton';

const overViewUrl = 'http://52.3.78.233/users';

export function InputFormCalculator(props) {
  const [users, setUsers] = useState('');
  const [country, setCountry] = useState({'label': '', 'value': '' });
  const [isFormValid, setIsFormValid] = useState(true);

  const countriesOptions = useMemo(() =>  countryList().getData(), []);
  console.log(countriesOptions)
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      if(country.label !== '' && users !== '' && !isNaN(Number(users))) {
        setIsFormValid(true)
        DataSender( {"country": country.label, "users": Number(users) }, overViewUrl);
        setCountry('');
        setUsers('');
      } else {
        setIsFormValid(false);
      }
  }

  return (
    <div className = "form-box">
      <form onSubmit={handleSubmit}>
        <label>
          Select Country:
          <Select id={'country_select'}
                  options={countriesOptions}
                  value={country}
                  onChange={e => {setCountry(e); setIsFormValid(true);}}
          />
        </label>
        <label>
          Users:
          <input type="text"
                placeholder="Users Number"
                value={users}
                onChange={e => {setUsers(e.target.value); setIsFormValid(true);}}
          />
        </label>
          {!isFormValid && <Alert variant="filled" severity="error">
            'Users'/'Country' value is invalid!
          </Alert>}
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default InputFormCalculator;