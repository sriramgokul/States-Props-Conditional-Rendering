
import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard';

function App() {
  const data = [
    {
      productImg : "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/18905142/2022/8/22/2e5fa1a7-8726-4270-85af-575513b738031661152946467-Skechers-Boys-Black-Printed-Slip-On-Sneakers-954166115294607-1.jpg",
      productName : "Puma",
    },
    {
      productImg : "https://m.media-amazon.com/images/I/71eTRlEqwoL._AC_UY1000_.jpg",
      productName: "WoodLand",
    },
    {
      productImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NHH_NQZNazBB4WcQKDPXbIEpCWgb71Zl_g&s",
      productName: "Reebok",
    },
    {
      productImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJcV7xZd2iQxjBCE-BuSMj_q1HZrNBxqEYA&s",
      productName: "Adidas",
    },
  ]
  const [product,setProduct] = useState(data);
  const [inCart,setInCart]= useState(0);


  return (
    <div className='app'>
      <div className='cart-comp'>
        <h1>Cart: {inCart}</h1>
      </div>
      <div className='cart-area'>
      {
        product?.map((prod,idx)=>(
          <ProductCard key={idx}
          productImg = {prod.productImg}
          productName = {prod.productName}
          inCart = {inCart}
          setInCart = {setInCart}
          />
        ))
      }

      </div>
      
    </div>
  )
}

export default App


