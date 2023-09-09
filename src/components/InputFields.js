import React, { useState } from 'react'
import CustomInput from './CustomInput'
import arrowImg from '../assets/images/icon-arrow.svg';

const InputFields = () => {

  const [data, setData] = useState({
    day: '',
    month: '',
    year: ''
  })

  function checkDate(str) {
    str = str.split('.').reverse();
    let cur = new Date();
    let date = new Date(str);
    cur.setHours(0,0,0,0); 
    return date !== null && date.getTime() < cur.getTime();
  }

  const handleSubmit = () => {
    console.log(checkDate(`${data.day}.${data.month}.${data.year}`))
  }

  return (
    <div >
      <div className='input-fields'>
        <CustomInput setData={setData} placeholder='DD' label='DAY' />
        <CustomInput setData={setData} placeholder='MM' label='MONTH' />
        <CustomInput setData={setData} placeholder='YYYY' label='YEAR' />
      </div>
      <div onClick={handleSubmit} className='input-btn'>
        <div className='grey-line'></div>
        <div className='submit-btn'>
          <img src={arrowImg} alt='Arrow' />
        </div>
      </div>
    </div>
  )
}

export default InputFields
