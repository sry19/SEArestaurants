import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import RestaurantCard from './components/restaurantCard.js'
import RestaurantList from './components/restaurantList';
import AppRoutes from './routes'
import { Card, Row, Col, Container } from "react-bootstrap";
import PrimarySearchAppBar from './components/header'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';
import {BrowserRouter} from 'react-router-dom'

function App(props) {

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <BrowserRouter>
        <AppRoutes />  
      </BrowserRouter>  
    </div>
  );
}

export default App;
