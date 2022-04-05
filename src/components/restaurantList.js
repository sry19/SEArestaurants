import * as React from 'react';
import RestaurantCard from './restaurantCard'
import { Card, Row, Col, Container } from "react-bootstrap";

export default function RestaurantList(props) {

    const restLst = [
        {
            'name': 'Niku Niku Japanese Barbecue',
            'img': require("../static/images/cards/niku.jpg"),
            'startDate': '2021 Sep'
        },
        {
            'name': 'Sawyer',
            'img': require('../static/images/cards/sawyer.jpg'),
            'startDate': '2021 Oct'
        },
    ]

    return (
        <div>
            <Container>
                <Row>
                    {
                        restLst.map((r) => 
                            <Col xs={12} md={4} lg={3}>
                                <RestaurantCard name={r.name} img={r.img}/>
                            </Col>
                        )
                    }
                    
                </Row>
            </Container>
        </div>
    );
}