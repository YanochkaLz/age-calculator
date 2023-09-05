import React from 'react'
import CustomInput from './CustomInput'

const InputFields = () => {
  return (
    <form className='input-fields'>
      <CustomInput placeholder='DD' label='DAY'/>
      <CustomInput placeholder='MM' label='MONTH'/>
      <CustomInput placeholder='YYYY' label='YEAR'/>
    </form>
  )
}

export default InputFields
