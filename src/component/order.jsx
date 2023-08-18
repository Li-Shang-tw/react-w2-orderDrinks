import { useState,useEffect } from 'react'

function Order(props){
    const [total,setTotal] = useState(0)

    const {name,qty,id,price} =props;

    useEffect(()=>{
        setTotal(qty*price)
    },[qty])  //監聽qty是否合理 why
    return(
        <tr>
        <td>{name}</td>
        <td>{qty}</td>
        <td>{total}</td>
      </tr>
    )
}

export default Order