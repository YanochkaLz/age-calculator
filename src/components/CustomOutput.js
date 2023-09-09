import React from 'react'

const CustomOutput = ({value = '--', prop = 'years'}) => {
  return (
    <div className='custom-output'>
      <span>{value}</span>
      {prop}
    </div>
  )
}

export default CustomOutput
