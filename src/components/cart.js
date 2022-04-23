import { valueToPercent } from '@mui/base';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from "react-bootstrap";

export default function Cart(props) {

    const restaurantName = props.restaurantName;
    const currentOrder = useSelector((state) => state.orderCounter);
    const [cur, setCur] = React.useState(currentOrder.value);

    useEffect(() => {
        setCur(currentOrder.value)
        console.log(currentOrder.value)
    },[currentOrder])

    let lst = []
    if (cur !== undefined && cur[restaurantName] !== undefined) {
        lst = Object.keys(cur[restaurantName])
    }

    return (
        <div>
            <h2>Cart</h2>
            <h3>{restaurantName}</h3>
            { 
                lst.filter( 
                    obj => cur[restaurantName][obj] != 0
                ).map(
                    (value, index) => 
                        <div style={{position: 'relative', marginLeft: '20px', paddingLeft:'10px'}} key={value}>
                            <Row><Col xs={8} md={8} lg={8}>{value}</Col> <Col xs={4} md={4} lg={4}>x {cur[restaurantName][value]}</Col></Row></div>
                )
            }
        </div>
    )
}