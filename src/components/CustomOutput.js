import React from 'react'

const CustomOutput = ({value = '--', prop = 'years'}) => {
  return (
    <div className='custom-output'>
      <div>{value}</div>
      {prop}
    </div>
  )
}

export default CustomOutput
