import { format } from 'date-fns';
import React from 'react';

const ClockDisplay = ({ date, title, timezone, offset }) => {

    //  console.log(format(date, 'yyyy-MM-dd hh:mm:ss aaa'));
    let offsetHr = offset / 60
    return (
        <div>
            <h1>{title}</h1>
            <h3>{format(date, 'yyyy-MM-dd hh:mm:ss aaa')}</h3>
            <p>{timezone}
                {offset > 0
                    ? ` +${Math.abs(offsetHr)}`
                    : ` -${Math.abs(offsetHr)}`}</p>
        </div>
    )
}

export default ClockDisplay