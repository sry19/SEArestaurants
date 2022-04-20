import {Route, Routes, Navigate, useLocation} from 'react-router-dom'
import RestaurantList from './components/restaurantList';
import FoodItem from './components/foodItem';
import FoodOrderPage from './components/foodOrderPage'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<RestaurantList />}></Route>
                <Route path='/order' element={<FoodOrderPage />}></Route>
            </Routes>
        </>
    )
}