import {Route, Routes, Navigate, useLocation} from 'react-router-dom'
import RestaurantList from './components/restaurantList';
import FakePage from './components/fakePage'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<RestaurantList />}></Route>
                <Route path='/tos' element={<FakePage />}></Route>
            </Routes>
        </>
    )
}