import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import RestaurantCard from './components/restaurantCard.js'
import RestaurantList from './components/restaurantList';
import { Card, Row, Col, Container } from "react-bootstrap";
import PrimarySearchAppBar from './components/header'

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <RestaurantList />
      
    </div>
  );
}

export default App;
