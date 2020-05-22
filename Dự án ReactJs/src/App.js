import React from 'react';
import Menu from './components/Menu';
import Overview from './components/Overview';
import Resources from './components/Resources';
import Ebook from './components/Ebook';
import Business from './components/Business';
import Product from './components/Product';
import ManagementArea from './components/ManagementArea';
import Personnel from './components/Personnel';
import Setting from './components/Setting';
import { Container, Row, Col} from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  return (
    <Router>     
        <Ebook />
      <br />
      <br />
      <br />

   
    <Row noGutters={true}>

      <Col sm={ 1 } >
        <Menu />
      </Col>

      <Col sm={ 11 } >
        <Switch>
        
        <Route path="/resources">
          <Resources />
        </Route>

        <Route path="/business">
          <Business />
        </Route>

        <Route path="/product">
          <Product />
        </Route>

        <Route path="/managementArea">
          <ManagementArea />
        </Route>

        <Route path="/personnel">
          <Personnel />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>


      {/* trang chủ luôn đặt cuối */}
        <Route path="/">
          <Overview />           
        </Route>


      </Switch>
      </Col>

      </Row>
    

    </Router>
    );


}

export default App;
