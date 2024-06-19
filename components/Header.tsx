"use client";

import { Button } from '@/components/ui/button'
import { getCartTotal } from '@/lib/getCartTotal';
import { useCartStore } from '@/store';
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'

function Header() {
  const router = useRouter()
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    console.log('input',input)
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col bg-walmart items-center px-10 py-7 space-x-5">
      <Link href="/" className="mb-5 ">
        <Image 
          src="https://i.imgur.com/5V4wehM.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <form 
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1">
        <input 
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none
          placeholder:text-xs text-black"
          
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0 p-5 pb-0">
         <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center
          space-x-2 text-sm"
         >
          <Grid2X2 size={20} />
          <p>Departments</p>
         </Link>
         <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center
          space-x-2 text-sm"
         >
          <LayoutGrid size={20} />
          <p>Services</p>
         </Link>
         <Link
          href={"/"}
          className="xl:flex text-white font-bold items-center
          space-x-2 text-sm"
         >
          <Heart size={20} />
          <p className="text-xs font-extralight">Reorder</p>
          <p>My Items</p>
         </Link>
         <Link
          href={"/"}
          className="xl:flex text-white font-bold items-center
          space-x-2 text-sm"
         >
          <User size={20} />
          <p className="text-xs font-extralight">Sign In</p>
          <p>Account</p>
         </Link>
         <Link
          href={"/basket"}
          className="xl:flex text-white font-bold items-center
          space-x-2 text-sm"
         >
          <ShoppingCart size={20} />
          <p className="text-xs font-extralight">
            {cart.length > 0 ? `${cart.length} items` : "No items"}
          </p>
          <p>{total}</p>
         </Link>
      </div>
    </header>
  )
}

export default Header