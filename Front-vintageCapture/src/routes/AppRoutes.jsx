import { Routes, Route, Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';

import LayoutMain from '../components/layout/Layaout.main';
import Auth from '../pages/auth/Auth';
import Cart from '../pages/cart/Cart';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import MyProfile from '../pages/account/MyProfile';
import Product from '../pages/products/product/Product';




const AppRoutes = () => {
  
  const { userState, verifyToken} = useContext(UserContext)
  const token = userState.authStatus;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const llamar = async() => {
      await verifyToken()
      setLoading(false)
    }
    llamar()
     
 }, [userState.authStatus])

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          {token === false && <Route path='/auth' element={<Auth />} />}
          <Route path='/cart' element={<Cart />} />
          {token === true && <Route path='/user/myprofile' element={<MyProfile />} />}
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;