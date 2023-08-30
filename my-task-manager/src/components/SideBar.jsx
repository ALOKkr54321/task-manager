import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdWindow, MdMessage, MdCalendarMonth} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import {ImExit} from 'react-icons/im'

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between items-center bg-slate-50 rounded-2xl p-3 h-screen fixed'>
      <ul className='flex flex-col gap-3 mt-20'>
        <li className='border-slate-100 border-[3px] rounded-full p-2'>
            <Link><BsFillPersonFill className='text-slate-600 text-2xl'/></Link>
        </li>
        <li className='border-slate-100 border-[3px] rounded-full p-2'>
            <Link><MdWindow className='text-slate-600 text-2xl'/></Link>
        </li>
        <li className='border-slate-100 border-[3px] rounded-full p-2'>
            <Link><MdMessage className='text-slate-600 text-2xl'/></Link>
        </li>
        <li className='border-slate-100 border-[3px] rounded-full p-2'>
            <Link><IoMdSettings className='text-slate-600 text-2xl'/></Link>
        </li>
        <li className='border-slate-100 border-[3px] rounded-full p-2'>
            <Link><MdCalendarMonth className='text-slate-600 text-2xl'/></Link>
        </li>
      </ul>

      <div className='border-slate-100 border-[3px] rounded-full p-2'>
        <Link>
            <ImExit className='text-slate-600 text-2xl'/>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
