import * as React from 'react';
import RestaurantCard from './restaurantCard'
import { Card, Row, Col, Container } from "react-bootstrap";

export default function RestaurantList(props) {

    const restLst = [
        {
            'name': 'Niku Niku Japanese Barbecue',
            'img': 'https://s3-media0.fl.yelpcdn.com/bphoto/IwsHj0v_RZ-3VNf30KWqjg/o.jpg',
            'startDate': '2021 Sep'
        },
        {
            'name': 'Sawyer',
            'img': 'https://s3-media0.fl.yelpcdn.com/bphoto/NHZ7dy1yo15DpBTnExtv0g/o.jpg',
            'startDate': '2021 Oct'
        },
        {
            'name': 'Nue',
            'img': 'https://s3-media0.fl.yelpcdn.com/bphoto/A0FKD9Gtv_xo2l_e9EiqAw/o.jpg',
            'startDate': '2021 Jan'
        },
        {
            'name': 'Biang Biang Noodles',
            'img': 'https://s3-media0.fl.yelpcdn.com/bphoto/alZbMIPoz-mktc3nJxRPJw/o.jpg',
            'startDate': '2022 Jan'
        }
    ]

    return (
        <div>
            <Container >
                <Row>
                    {
                        restLst.map((r) => 
                            <Col xs={12} md={4} lg={4}>
                                <RestaurantCard name={r.name} imag={r.img} startDate={r.startDate} />
                            </Col>
                        )
                    }
                    
                </Row>
            </Container>
        </div>
    );
}