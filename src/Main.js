import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Card from '@mui/material/Card';
import { InputDetailsPage } from './containers/InputDetailsPage';
import OverViewPage from './containers/OverViewPage';
 
class Main extends Component {
    render() {
      return (
        <Router>
          <div>
            <h1>Over View Application</h1>
            <ul className="header">
              <li><NavLink exact="true" to="/over-view">Over View</NavLink></li>
              <li><NavLink to="/input-details">Input Details</NavLink></li>
            </ul>
            <Card raised>
              <div className="content">
                <Routes>
                  <Route path="/over-view" element={<OverViewPage/>}>
                  </Route>
                  <Route path="/input-details" element={<InputDetailsPage/>}>
                  </Route>
                  <Route path="/" element={<OverViewPage/>}>
                  </Route>
                </Routes>
              </div>
            </Card>
          </div>
        </Router>
      );
    }
  }
 
export default Main;