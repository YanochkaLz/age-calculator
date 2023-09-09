import React, { useEffect, useState } from 'react'

const CustomInput = ({ label = 'DAY', placeholder = 'DD', setData, setError }) => {
    const [value, setValue] = useState('');
    const [mistake, setMistake] = useState(false)
    const req = /[0-9]/;

    const handleValidation = (val) => {
        if (val === '') {
            setMistake(false);
            return;
        }
        switch (label) {
            case 'DAY':
                if (!(val.length === 2 && val[0].match(req) && val[1].match(req) && val < 32 && val > 0)) {
                    setMistake('Must be a valid day')
                    setError(true);
                    return;
                }
                setError(false);
                setMistake(false)
                setData(prev => ({ ...prev, day: val }));
                break;
            case 'MONTH':
                if (!(val.length === 2 && val[0].match(req) && val[1].match(req) && val < 13 && val > 0)) {
                    setMistake('Must be a valid month')
                    setError(true);
                    return;
                }
                setError(false);
                setMistake(false)
                setData(prev => ({ ...prev, month: val }))
                break;
            case 'YEAR':
                if (!(val.length === 4)) {
                    setMistake('Must be a valid year')
                    setError(true);
                    return;
                }
                setError(false);
                const now = new Date();
                let y = now.getFullYear();
                if (!(y + 1 > val)) {
                    setMistake('Must be a valid year')
                    setError(true);
                    return;
                }
                setError(false);
                setMistake(false)
                setData(prev => ({ ...prev, year: val }))
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        handleValidation(value);
    }, [value]);

    return (
        <div className={mistake ? 'input-block mistakes' : 'input-block'}>
            <label htmlFor='input'>
                {label}
                <br></br>
            </label>
            <input value={value} onChange={e => setValue(e.target.value)} id='input' placeholder={placeholder} type='text' />
            {mistake &&
                <div className='error-mess'>{mistake}</div>
            }
        </div>
    )
}

export default CustomInput
