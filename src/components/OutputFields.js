import React, { useEffect, useState } from 'react'
import CustomOutput from './CustomOutput'

const MS_IN_YEAR = 31536000000;
const MS_IN_MONTH = 2.6297 * (10 ** 9);
const MS_IN_DAY = 8.64 * (10 ** 7);

const OutputFields = ({ data }) => {
    const [userAge, setUserAge] = useState({
        years: '--',
        month: '--',
        days: '--'
    })
    console.log(userAge)

    const calculateAge = (date) => {
        if (!data.day.length || !data.month.length || !data.year.length) {
            return;
        }
        const currentTime = new Date();
        const userTime = new Date(date.year, date.month - 1, date.day);
        let diff = currentTime - userTime;

        console.log((currentTime - userTime) / MS_IN_MONTH)

        const year = Math.floor(diff / MS_IN_YEAR);
        diff -= year * MS_IN_YEAR;

        const month = Math.floor(diff / MS_IN_MONTH);
        diff -= month * MS_IN_MONTH;

        const day = Math.floor(diff / MS_IN_DAY);

        console.log(year, month, day);
        setUserAge({
            years: year.toString(),
            month: month.toString(),
            days: day.toString()
        })
    }

    useEffect(() => {
        calculateAge(data);
    }, [data]);

    return (
        <div className='output-fields'>
            {Object.entries(userAge).map((elem, i) =>
                <CustomOutput key={i} prop={elem[0]} value={elem[1].length ? elem[1] : '--'} />
            )}
        </div>
    )
}

export default OutputFields
