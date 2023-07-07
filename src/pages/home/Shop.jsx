import {FaOpencart} from 'react-icons/fa'
import { useState } from 'react'

export default function Shop() {


  function Item(props){
    return(
      <picture id={props.id}>
        <div className="overlay">
          <span className="product-name">{props.name}</span>
          <span className="product-price">${(props.price).toFixed(2)}</span>
          <button className="add-cart-button">
            {/* <span>Add to cart</span> */}
            <FaOpencart className='cart'/>
          </button>
        </div>
        <img src={props.src} alt="" />
      </picture>
    )
  }

  return (
    <section className="shop">
        <h2>Transform your space with our stunning furniture collection</h2>
        <button className='shop-button'>
          <span>Shop now</span>
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
        <div className="shop-images">
            <Item
              id={'img-1'}
              name={'White Plastic Chair'}
              price={49.9}
              src={'/images/shop-image-1.jpg'}
            />  
            <div className="column">
              <Item
                id={'img-2'}
                name={'Aluminum Chair'}
                price={29.9}
                src={'/images/shop-image-2.jpg'}
              />
              <Item
                id={'img-3'}
                name={'Leather Sofa'}
                price={299.9}
                src={'/images/shop-image-3.jpg'}
              />
            </div>
            <Item
              id={'img-4'}
              name={'Wood Chair'}
              price={119.9}
              src={'/images/shop-image-4.jpg'}
            />
        </div>
        <button className='shop-button all-products'>
          <span>See all products</span>
          <img src="/images/icon-arrow.svg" alt="" className='arrow'/>
      </button> 
    </section>
  )
}
