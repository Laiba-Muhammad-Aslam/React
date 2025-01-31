import React from 'react'

function Header() {
  return (
    <div className='bg-purple-600 flex items-center justify-between header p-4 text-white mb-10'>
        <div className='font-extrabold text-2xl'><h1>Redux Store</h1></div>
        <div className='flex items-center justify-between'>
            <ul className='flex gap-4 font-medium'>
                <li>Home</li>
                <li className='mr-5'>My Products</li>
            </ul>
            <div className=''>
                <button className='flex font-medium'><img src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000" alt="cartIcon" className='w-7 text-white mr-1' />Count</button>
            </div>
        </div>
    </div>
  )
}

export default Header