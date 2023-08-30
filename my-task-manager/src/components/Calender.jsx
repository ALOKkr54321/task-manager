import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Calender = () => {

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  }

  return (
    <div className='w-full flex item-center gap-3 px-5 '>
      <Calendar onChange={onChange} value={date} className='rounded-2xl outline-none bg-slate-200'/>
    </div>
  )
}

export default Calender
