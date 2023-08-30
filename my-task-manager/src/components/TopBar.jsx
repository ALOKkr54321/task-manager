import React from 'react'
import {RiSearch2Fill, RiNotification2Fill} from 'react-icons/ri'
import profileImg from '../assets/pic-1.png'

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-slate-50 rounded-2xl p-2'>

        <div className='flex flex-row bg-slate-200 items-center rounded-2xl w-1/3'>
          <RiSearch2Fill className='ml-[10px] text-slate-400'/>
          <input type="text" placeholder='Search' className=' rounded-2xl outline-none p-3 bg-slate-200 w-11/12'/>
        </div>

      <div className='flex flex-row items-center gap-3'>
        <button className='rounded-full p-2 bg-slate-200'>
          <RiNotification2Fill className='text-slate-600 text-2xl'/>
        </button>
        <div>
          <img src={profileImg} alt="" className='w-[55px] rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
