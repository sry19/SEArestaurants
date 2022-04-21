import React, { useEffect }  from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import './foodItem.css'
import Food from './food.js'

export default function FoodItem(props) {
    
    const foodList = props.foodList;
    const restaurantName = props.restaurantName;


    return (
        <Col xs={12} md={12} lg={8}>
            <div style={{padding:'50px'}} id='order'>
                <Card style={{ padding:'15px',paddingLeft:'20px',marginTop:'10%'}}>
                <h2>Full Menu</h2>
                {foodList.map(f => 
                    <Food food={f} restaurantName={restaurantName}/>
                )}
                </Card>
            </div>
        </Col>
    )
}