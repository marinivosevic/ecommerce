import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import  {useStateContext} from '../context/StateContext'

const Success = () => {
    const {setCartItems,settotalPrice,settotalQuantities} = useStateContext();
    useEffect(() =>{
        localStorage.clear();
        setCartItems([]);
        settotalPrice(0);
        settotalQuantities(0);
    },[]);
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>
                Thank You for your order!
            </h2>
            <p className='email-msg'>
                Check your email inbox for receit
            </p>
            <p className='description'>
                <a className='email' href='mailto:hajdrogedon56@gmail.com'>hajdrogedon56@gmail.com</a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    Continiue
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success