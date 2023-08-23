import { useState,useEffect } from 'react'


function Order(props){
    
    const [total,setTotal] = useState(0)
    const {id,name,price,description,qty ,updateCartDrinkQty,deleteDrinkInCart} = props;
    
    //function
    function handleQtyChange(e,id){
      const qtyNow = e.target.value;      
      updateCartDrinkQty(qtyNow,id)
    }
//加總小計
    useEffect(()=>{
      setTotal(qty*price)
    },[qty])

    
return(
<tr>
<td><button type="button" className="btn btn-sm" onClick={()=>{deleteDrinkInCart(id)}}>x</button></td>
<td>{name}</td>
<td><small>{description}</small></td>
<td>
  <select className="form-select"  onChange={(e)=>{handleQtyChange(e,id)}} value={qty}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</td>
<td>{price}</td>
<td>{total}</td>
</tr>
)
}

export default Order