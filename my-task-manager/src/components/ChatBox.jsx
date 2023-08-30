import React from 'react'
import {RiSearch2Fill} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'

const ChatBox = () => {

  const Data = [
    {
      id: 1,
      name: "Pranay Gupta",
      recentText: "Software Engineer",
      image: "https://aeccc.targettechnology.in/static/media/PranayGupta.f3c530b7630ba8efb2ab.jpg",
      time: "1hr ago",
    },
    {
      id: 2,
      name: "Abir Pal",
      recentText: "Graphic Designer",
      image: "https://aeccc.targettechnology.in/static/media/AbirPal.574a09ad7cb325853b29.jpg",
      time: "1hr ago",
    },
    {
      id: 3,
      name: "Soumya Banerjee",
      recentText: "Marketing Manager",
      image: "https://aeccc.targettechnology.in/static/media/SoumyaBanerjee.2e2521d6029842435080.jpg",
      time: "1hr ago",
    },
    {
      id: 4,
      name: "Saikat Mukherjee",
      recentText: "Content Strategist",
      image: "https://aeccc.targettechnology.in/static/media/SaikatMukherjee.033310703edff52d0532.jpg",
      time: "1hr ago",
    },
    {
      id: 5,
      name: "Aritra Biswas",
      recentText: "Data Analyst",
      image: "https://avatars.githubusercontent.com/u/93366359?v=4",
      time: "1hr ago",
    },
  ]

  return (
    <div className='flex flex-col bg-slate-50 rounded-2xl p-3'>
      {/* Search section  */}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row bg-slate-200 items-center rounded-2xl'>
          <RiSearch2Fill className='ml-[3px] text-slate-400'/>
          <input type="text" placeholder='Search' className=' rounded-2xl outline-none p-2 bg-slate-200 '/>
        </div>

        <div className='flex flex-row gap-2'>
          <button className='rounded-full bg-slate-200 p-2'>
            <BsThreeDotsVertical className='text-slate-600 text-2xl'/>
          </button>
          <button className='rounded-full bg-slate-200 p-2'>
            <BiSolidMessageSquareDetail className='text-slate-600 text-2xl'/>
          </button>
        </div>
      </div>

      {/* message section  */}
      <div className='flex flex-col w-full gap-2 mt-2'>
        {
          Data.map((data) => (
            <div key={data.id} className='flex justify-between items-center w-full p-1 border-b-2'>
                {/* image + name + recent message  */}
                <div className='flex flex-row gap-1'>
                  <img src={data.image} alt="" className='w-[48px] rounded-full'/>
                  <div className='flex flex-col'>
                    <p className='text-black font-semibold '>{data.name}</p>
                    <p className='text-slate-500'> You: {data.recentText}</p>
                  </div>
                </div>
                {/* time line + more */}
                <div className='flex flex-col items-end gap-1'>
                  <p className='text-slate-500'>{data.time}</p>
                  <button className='text-black rounded-full bg-slate-100 p-1'>
                    <BsThreeDotsVertical/>
                  </button>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChatBox
