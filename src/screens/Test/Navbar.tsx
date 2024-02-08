import Image from 'next/image'
import React from 'react'
import logoNavbar from '@/assets/logoNabar.svg'
export default function Navbar() {
  return (
    <div>
        <Image src ={logoNavbar} alt=''></Image>
        <div>
            <h1> la empresa</h1>
            <h1> la empresa</h1>
            <h1> la empresa</h1>
            <h1> la empresa</h1>
            <h1> la empresa</h1>
        </div>
    </div>
  )
}
