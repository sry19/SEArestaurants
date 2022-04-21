import React, { useEffect } from 'react';
import { Row, Col } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/counterSlice';

export default function Food(props) {
    const food = props.food;
    const foodName = props.food.foodName;
    const restaurantName = props.restaurantName;

    const dispatch = useDispatch()

    // clean up the cart
    // if refresh the page, cart will clean up

    const currentOrder = useSelector((state) => state.orderCounter.value[restaurantName])
    const [foodNumber, setFoodNumber] = React.useState(0);

    
    // setFoodNumber(orderCounter[foodName])
    // console.log(orderCounter)

    const incrementItems = () => {
        setFoodNumber((preState) => {
            if (preState < 10) {dispatch(increment([foodName, restaurantName, preState + 1])); return (preState + 1)}
            else {return (preState) }
        });
        
    }

    const decrementItems = () => {
        setFoodNumber((preState) => {
            if (preState > 0) {dispatch(decrement([foodName, restaurantName, preState - 1])); return (preState - 1)}
            else { return (preState) }
        });
        
    }


    return (
        <Row style={{paddingTop:'10px'}}>
            <Col xs={4} md={4} lg={4}><Avatar variant="rounded" sx={{ width: 86, height:70 }} alt={food.foodName} src={food.foodImg} /></Col>
            <Col xs={4} md={4} lg={4}><label >{foodName}</label></Col>
            <Col xs={4} md={4} lg={4}>
                <Fab variant="circular" color="primary" size="small" aria-label="add">
                    <IconButton disabled={foodNumber >= 5} onClick={incrementItems}>
                        <AddIcon />
                    </IconButton>
                </Fab>
                <label>{foodNumber}</label>
                <Fab variant="circular" color="primary" size="small" aria-label="remove">
                    <IconButton disabled={foodNumber <= 0} onClick={decrementItems}>
                        <RemoveIcon />
                    </IconButton>
                </Fab>
            </Col>
        </Row>
    )

}