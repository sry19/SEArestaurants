import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './foodItem.css'

export default function FoodItem(props) {
    const [foodNumber, setFoodNumber] = React.useState(0);

    const foodList = props.foodList;

    return (
        <Col xs={12} md={12} lg={8}>
            <div style={{padding:'50px'}} id='order'>
                <Card style={{ padding:'15px',paddingLeft:'20px',marginTop:'10%'}}>
                {foodList.map(f => 
                    <Row style={{paddingTop:'10px'}}>
                        <Col xs={4} md={4} lg={4}><Avatar variant="rounded" sx={{ width: 86, height:70 }} alt={f.foodName} src={f.foodImg} /></Col>
                        <Col xs={4} md={4} lg={4}><label >{f.foodName}</label></Col>
                        <Col xs={4} md={4} lg={4}>
                            <Fab variant="circular" color="primary" size="small" aria-label="add">
                                <AddIcon />
                            </Fab>
                            <label>{1}</label>
                        </Col>
                    </Row>
                )}
                </Card>
            </div>
        </Col>
    )
}