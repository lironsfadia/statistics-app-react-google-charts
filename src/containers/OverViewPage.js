import React, { Fragment } from 'react';
import DataProvider from '../api/DataProvider';
import { OverviewCalculator } from '../components/OverviewCalculator';
 
const overViewUrl = 'http://52.3.78.233/users';

function OverViewPage() {
    return (
      <Fragment>
        <DataProvider calculator={OverviewCalculator} url={overViewUrl}/>
      </Fragment>
    );
}
 
export default OverViewPage;