"use client"

import { useCartStore } from '@/store'
import { Product } from '@/typings/productTypings'
import React from 'react'
import { Button } from './ui/button';
import RemoveFromCart from './RemoveFromCart';

function AddToCart({product}: {product: Product}) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  console.log(cart)
  console.log('product ', product)
  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  console.log('how many in the car: ', howManyInCart)

  const handleAdd = () => {
    console.log("Adding to cart", product)
    addToCart(product)
  }

  if ( howManyInCart > 0 ) {
    return (
        <div className="flex space-x-5 items-center">
            {/* <RemoveFromCart product={product} /> */}
            <RemoveFromCart product={product} />
            <span>{howManyInCart}</span>
            <Button className="bg-walmart hover:bg-walmart/50" 
                onClick={handleAdd}>
                    +
            </Button>
        </div>
    )
  }

  
  return (
    <Button className="bg-walmart hover:bg-walmart/50"  onClick={handleAdd}>AddToCart</Button>
  )
}

export default AddToCart