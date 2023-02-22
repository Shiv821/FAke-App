// How to fetch data form an api using async and await:-

import React,{useState,useEffect} from 'react'

const Dummy = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{

    const fetchProducts = async() => {
       const res = await fetch('https://fakestoreapi.com/products');
       const data = await res.json();
       console.log(data);
       setProducts(data);
    }
    fetchProducts();

  },[]);
  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
          <div className='card' key={product.id}>
            <img src ={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn'>Add to Cart</button>

          </div>

        ))
      }

    </div>
  )
}

export default Dummy