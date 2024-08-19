import { useState } from "react";



function ProductCard({productImg,productName,inCart,setInCart}){
    const [show,setShow] = useState(true)
  
  
    function handleAdd(){
      // Change the state of Add Button
      setShow(!show)
      setInCart(inCart + 1);
    }
      // Change the state of Remove Button
  
    function handleRemove(){
      setShow(!show)
      setInCart(inCart - 1);
    }
  
    return(
      <div className='card-component'>
        <img src={productImg}/>
        <h3>{productName}</h3>
        <div className='button'>
          {show === true ? <button onClick={handleAdd}>Add to Cart</button> : <button onClick={handleRemove}>Remove from Cart</button>}
        </div>
      </div>
    )
  }

  export default ProductCard;