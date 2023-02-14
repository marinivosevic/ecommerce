import React from 'react'
import Link from 'next/link';
import {AiOutlineShipping} from 'react-icons';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Diguzor macka</Link>
      </p>

      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShipping/>
        <span className='cart-item-qty'>
        1
        </span>
      </button>
    </div>
  )
}

export default Navbar