import React, {useEffect} from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import './foodItem.css'
import FoodItem from './foodItem';
import Cart from './cart.js'
import { useSelector, useDispatch } from 'react-redux';
import { initializeOrder } from '../store/counterSlice';

export default function FoodOrderPage(props) {
    const restaurantName = "niku niku";

    const currentOrder = useSelector((state) => state.orderCounter.value[restaurantName])
    console.log('current order:', currentOrder)
    const dispatch = useDispatch()

    const foodList = [
        {
            foodKey: '1',
            foodName: 'Wagyu Meatballs',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/mqsIE7Mmw2W1u1-0NqQRfA/o.jpg'
        },
        {
            foodKey: '2',
            foodName: 'Crispy Pig Ears',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/DnImBDhYOl69aHZxLtqZBw/o.jpg'
        },
        {
            foodKey: '3',
            foodName: 'Kumamoto Oysters',
            foodImg: 'https://s3-media0.fl.yelpcdn.com/bphoto/mvnnOuQDUiPo8I_5qM95Tg/o.jpg'
        }
    ]

    // clean up the cart
    // cannot refresh the page; if refresh, cart will clean up
    useEffect(() => {
        dispatch(initializeOrder([restaurantName, foodList]))
        console.log('clean up cart')
    }, [restaurantName]);

    return (
        <div>
            <Container style={{marginTop:'0px', minHeight: '800px'}}>
                <Row>
                    <FoodItem foodList={foodList} restaurantName={restaurantName} />
                    <Col xs={12} md={12} lg={4}>
                        <div style={{paddingTop:'40px', marginTop: '80px', paddingLeft:'10px'}} >
                            <Card style={{ padding:'20px',marginTop:'10px'}}>
                                <Cart restaurantName={restaurantName}/>
                            </Card>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}