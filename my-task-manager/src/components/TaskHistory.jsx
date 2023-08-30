import React from 'react'
import {RiSearch2Fill} from 'react-icons/ri'
import {TiInputChecked} from 'react-icons/ti'

const lists = [
    {
        time: "09:00-10:30",
        task: "metting with the design team",
    },
    {
        time: "09:00-10:30",
        task: "metting with the design team",
    },
    {
        time: "09:00-10:30",
        task: "metting with the design team",
    },
    {
        time: "09:00-10:30",
        task: "metting with the design team",
    },
]

const TaskHistory = () => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center mb-2'>
        <h3 className='font-bold'>TASK HISTORY</h3>
        <div className='flex flex-row bg-slate-200 items-center rounded-2xl'>
          <RiSearch2Fill className='ml-[3px] text-slate-400'/>
          <input type="text" placeholder='Search' className=' rounded-2xl outline-none p-2 bg-slate-200 '/>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        {
            lists.map((list, index) => (
                <div className='flex flex-row gap-2 items-start bg-slate-200 rounded-2xl p-2'>
                    <TiInputChecked className='text-[36px] text-green-500'/>
                    <div className='flex flex-col items-start'>
                        <p className='text-slate-600'>{list.time}</p>
                        <p className='text-slate-800 font-bold uppercase text-xs'>{list.task}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default TaskHistory
