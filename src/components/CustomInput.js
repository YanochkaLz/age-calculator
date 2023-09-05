import React from 'react'

const CustomInput = ({ label = 'DAY', placeholder = 'DD' }) => {
    return (
        <div className='input-block'>
            <label for='input'>
                {label}
                <br></br>
            </label>
            <input id='input' placeholder={placeholder} type='text' />
        </div>
    )
}

export default CustomInput
