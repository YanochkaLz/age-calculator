import React from 'react'
import CustomOutput from './CustomOutput'

const OutputFields = () => {
  return (
    <div className='output-fields'>
        <CustomOutput prop='years'/>
        <CustomOutput prop='mont'/>
        <CustomOutput prop='years'/>
    </div>
  )
}

export default OutputFields
