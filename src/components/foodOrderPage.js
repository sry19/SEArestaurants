import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './foodItem.css'
import FoodItem from './foodItem';

export default function FoodOrderPage(props) {
    const foodNumber = React.useState(0);

    const foodList = [
        {
            foodName: 'Wagyu Meatballs',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/mqsIE7Mmw2W1u1-0NqQRfA/o.jpg'
        },
        {
            foodName: 'Crispy Pig Ears',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/DnImBDhYOl69aHZxLtqZBw/o.jpg'
        },
        {
            foodName: 'Kumamoto Oysters',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/mvnnOuQDUiPo8I_5qM95Tg/o.jpg'
        }
    ]

    return (
        <div>
            <Container style={{marginTop:'0px', minHeight: '800px'}}>
                <Row>
                    <FoodItem foodList={foodList}/>
                    <Col xs={12} md={12} lg={4}>
                        <div style={{padding:'50px', marginTop: '50px'}} >
                            <Card style={{ padding:'20px',marginTop:'10%'}}>
                                <h2>Cart:</h2>
                            </Card>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}