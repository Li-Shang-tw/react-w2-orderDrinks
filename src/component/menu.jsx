function Menu(props){
    const {drinkId,name,price,description,updateCart} = props;
 return(<>
    <a href="#" className="list-group-item list-group-item-action"
            
            key={drinkId}
            onClick ={()=>{updateCart(drinkId)}}
            ><div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{name}</h5>
              <small>{price}</small>
            </div>
            <p className="mb-1">{description}</p></a
          ></>
 )
}

export default Menu