import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-5 pb-2 '>
        <Link className='text-[5.5vw] leading-[6vw] uppercase border-3 border-white rounded-full px-10 pt-4 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projects'>Projects</Link>
        <Link className='text-[5.5vw] leading-[6vw] uppercase border-3 border-white rounded-full px-10 pt-4 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText