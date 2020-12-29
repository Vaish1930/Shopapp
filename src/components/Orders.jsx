
import React , { useState,useEffect} from 'react'

function Orders({cart,setcart}) {


    const[order,setOrder]=useState([]);
  

    useEffect(() => {
      setOrder((prevorder)=>[...prevorder,cart])
        setcart([])
    }, [])
    console.log(order);
     
    return (
        <div>
            <h1>
                Orders
            </h1>
            <p >{JSON.stringify(order)}</p>
        </div>
     )
}

export default Orders
