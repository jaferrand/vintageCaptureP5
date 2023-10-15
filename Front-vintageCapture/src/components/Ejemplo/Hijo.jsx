import jwtDecode from 'jwt-decode';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';

const Hijo = () => {
    const { getUser, userState} = useContext(UserContext);
   

    
      
     
  //  console.log(userState)

    // console.log(tokenData)
 
    
  return (
    <div>
        {/* <h1>Bienvenido, {userState.info2._id}</h1> */}
    </div>
  )
}

export default Hijo;