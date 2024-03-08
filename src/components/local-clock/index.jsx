import React, { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import useTimer from '../../hooks/useTimer';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

export const LocalClock = ({ clock, updateClock, createClock }) => {

    const { date, timezone, offset } = useClock(
        clock.timezone,
        clock.offset
    )
    const timer = useTimer(date)

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset
        })
    }, [date])

    return (
        <div>
            {timer && (
                <ClockDisplay
                    date={timer}
                    offset={offset}
                    timezone={timezone}
                    title={clock.title}
                />
            )}
            <ClockActions
                local={true}
                clock={clock}
                updateClock={updateClock}
                createClock={createClock}
            />
        </div>
    )
}

export default LocalClock