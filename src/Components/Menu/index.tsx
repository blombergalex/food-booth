import Link from 'next/link'
import React from 'react'
import Button from '../Button'

const Menu = () => {
  return (
    <nav className='flex justify-evenly py-2'>
      <Link className="bg-green-700 p-1 rounded-md" href="/">Home</Link>
      <Link className="bg-purple-800 p-1 rounded-md" href="/profile">Profile</Link>
      <Link className="bg-blue-700 p-1 rounded-md" href="/category">Category</Link>
    </nav>
  )
}

export default Menu