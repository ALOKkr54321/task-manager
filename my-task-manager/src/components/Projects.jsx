import React from 'react'
import {AiOutlineRise, AiOutlineFall} from 'react-icons/ai'
import {HiOutlineChevronDown} from 'react-icons/hi'

const Projects = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 bg-slate-50 rounded-2xl p-5 gap-3 relative'>
      {/* progress  */}
      <div className='flex flex-col items-start'>
        <h3 className='font-bold'>POJECT IN PROGRESS</h3>

        <div className='mt-6 bg-green-300 rounded-xl p-1 text-black flex flex-row gap-3 items-center'>
          +16 Projects
          <AiOutlineRise/>
        </div>

        <button className='flex flex-row font-bold mt-2 items-center gap-2 text-xs '>
          <p>This months</p>
          <HiOutlineChevronDown />
        </button>
      </div>

      {/* unfinished */}
      <div className='flex flex-col items-start px-5 justify-between'>
        <h3 className='font-bold'>UNFINISHED PROGRESS</h3>
        
        <div className='mt-6 bg-green-300 rounded-xl p-1 text-black flex flex-row gap-3 items-center'>
          +6 Projects
          <AiOutlineRise/>
        </div>

        <button className='flex flex-row font-bold mt-2 text-xs items-center gap-2'>
          <p>This months</p>
          <HiOutlineChevronDown/>
        </button>
      </div>

      {/* horizontal line */}
      <div className='absolute bg-slate-200 w-[90%] top-[50%] left-[4%] h-[2px]'></div>
      {/* vertical line  */}
      <div className='absolute bg-slate-200 w-[2px] left-[50%] top-[4%] h-[90%]'></div>

      {/* paid  */}
      <div className='flex flex-col items-start justify-between'>
        <h3 className='font-bold'>PAID PROGRESS</h3>
        
        <div className='bg-pink-500 mt-6 rounded-xl p-1 text-white flex flex-row gap-3 items-center'>
          -6 Projects
          <AiOutlineFall/>
        </div>

        <button className='flex flex-row font-bold mt-2 text-xs items-center gap-2'>
          <p>This months</p>
          <HiOutlineChevronDown/>
        </button>
      </div>

      {/* completed */}
      <div className='flex flex-col items-start px-5 justify-between'>
        <h3 className='font-bold'>COMPLETED PROGRESS</h3>
        
        <div className='bg-green-300 mt-6 rounded-xl p-1 text-black flex flex-row gap-3 items-center'>
          +7 Projects
          <AiOutlineRise/>
        </div>

        <button className='flex flex-row font-bold mt-2 text-xs items-center gap-2'>
          <p>This months</p>
          <HiOutlineChevronDown/>
        </button>
      </div>
    </div>
  )
}

export default Projects
