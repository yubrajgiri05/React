import React, { useEffect, useState } from 'react'

function Product() {

    // let [name, setName] =useState ("Iphone 14");
    // let [price, setPrice] =useState (80000);

    //1. by default useEffect is called for every render and rerender
    //2. if you pass the secont para as ablank arry only call once
    //3. if you pass depedency array -useeffect will still be called for first time
    // it will also be called if value of variable change

    // useEffect(()=>{
    //     console.log('Component all');
    // },[price])

    let[product,setProduct]=useState([]);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
                setProduct(data);
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

  return (
    <>
     <div className="product">
        {
            product.map((product)=>{
                return(
                   <div className="products">
                    <img className='imgg' src={product.images} alt="" srcset="" />
                    <h1 className='ptitle'>{product.title}</h1>
                    <h2 className='pdescription'>{product.description}</h2>
                    <p className='creationAt'>{product.creationAt}</p>
                    <p className='updatedAt'>{product.updatedAt}</p>

                   </div>
                )
            })
        }
     </div>
    </>
  )
}

export default Product
