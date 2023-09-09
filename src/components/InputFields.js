import React, { useState } from 'react'
import CustomInput from './CustomInput'
import arrowImg from '../assets/images/icon-arrow.svg';

const InputFields = () => {

  const [data, setData] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [error, setError] = useState(false)

  function checkDate(str) {
    str = str.split('.').reverse();
    let cur = new Date();
    let date = new Date(str);
    cur.setHours(0,0,0,0); 
    return date !== null && date.getTime() < cur.getTime();
  }

  const handleSubmit = () => {
    if(!checkDate(`${data.day}.${data.month}.${data.year}`) || error === true || !data.day.length || !data.month.length || !data.year.length) {
      setError(true);
      return;
    }
    setError(false);

    
  }

  return (
    <div >
      <div className='input-fields'>
        <CustomInput setError={setError} setData={setData} placeholder='DD' label='DAY' />
        <CustomInput setError={setError} setData={setData} placeholder='MM' label='MONTH' />
        <CustomInput setError={setError} setData={setData} placeholder='YYYY' label='YEAR' />
      </div>
      {error && <p className='common-error'>That date doesn't exist!</p>}
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
