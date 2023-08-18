import { useState,useEffect } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from './data'

//import components
import Menu from "./component/menu"
import Cart from './component/cart';
import Order from './component/order'

function App() {
  //state
  const [meunDrinks,setMeunDrinks] = useState(data);
  const [cartDrinks,setCartDrinks] = useState([]);
  const [orderDrinks,setOrderDrinks] = useState([]);
  const [bigTotal,setBigTotal] =  useState(0);

   //事件function
   function updateCart(id){
   
    let isInCart = false;
    meunDrinks.filter(drink=>{
      
      if(drink.id === id){
        setCartDrinks((pre)=>{
         //檢查品項是否已在購物車
          pre.forEach((item)=>{
            if(item.id === id){
              isInCart =true;             
            }
          })  

         //如果不再購物車，才新增品項    
          if(!isInCart){  
            //將drink物件加上qty的屬性，初始值為1 
            let drinkInCart = {...drink} ;  
            drinkInCart .qty = 1;            
            let newCart = [...pre,drinkInCart];
            return newCart
          }else{
            //對已存在的drink的qry+1
          const updatedCartDrink =  pre.map((item)=>{
            if(item.id === id){
              
              item.qty +=1;
              return item
            }
            else{
              return item
            }
          })
            return updatedCartDrink
          }

         
         
        })
      }
    })
   
   }
 
   function updateCartDrinkQty(qty,id){
    setCartDrinks(pre=>{
     const newCartQty = pre.map(item=>{
      if(item.id === id){
        item.qty = qty;
        return item
      }else{
        return item
      }
     })
     return newCartQty
    })
   }
   function updateOrder(){
    setOrderDrinks(cartDrinks);
    //清空購物車
    setCartDrinks([]);
   }
  
   useEffect(()=>{
    let count = 0;
    cartDrinks.forEach((item)=>{
      count +=  item.price*item.qty;
    })
    
    setBigTotal(count);
   },
   [cartDrinks])
   
     
  return (
    <>
       <div className="container mt-5">
    <div className="row">
      <div className="col-md-4">
        <div className="list-group">
       { meunDrinks.map(drink => 
       <Menu
        drinkId={drink.id}
        name = {drink.name}
       price = {drink.price}
       description = {drink.description}
       updateCart ={updateCart}
        />)}
          
         
        </div>
      </div>
      <div className="col-md-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" width="50">操作</th>
              <th scope="col">品項</th>
              <th scope="col">描述</th>
              <th scope="col" width="90">數量</th>
              <th scope="col">單價</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
          { cartDrinks.map(drink => 
       <Cart 
       id ={drink.id}
       name = {drink.name}
       price = {drink.price}
       qty =  {drink.qty}
       description = {drink.description}
       updateCartDrinkQty ={updateCartDrinkQty}
      
        />)}
          
           
          </tbody>
        </table>
        <div className="text-end mb-3">
          <h5>總計: <span>{bigTotal}</span></h5>
        </div>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="備註"
        ></textarea>
        <div className="text-end">
          <button className="btn btn-primary" onClick={updateOrder}>送出</button>
        </div>
      </div>
    </div>
    <hr />
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>訂單</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                {orderDrinks.map(order=>
                <Order
                id= {order.id}
                name={order.name}
                qty={order.qty}
                price= {order.price}
                />) }
                 
                
                </tbody>
              </table>
              <div className="text-end">備註: <span>都不要香菜</span></div>
              <div className="text-end">
                <h5>總計: <span>$145</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
