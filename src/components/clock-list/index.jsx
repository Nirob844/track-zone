import React from 'react';
import ClockListItem from './clock-list-item';

const ClockList = ({ clocks, updateClock, deleteClock }) => {

    return (
        <div>
            <h3>other clocks</h3>
            <hr />
            {clocks.length == 0 ?
                (<p>there is no clock create one</p>)
                :
                (
                    <div>
                        {clocks.map(clock => (
                            <ClockListItem
                                key={clock.id}
                                clock={clock}
                                updateClock={updateClock}
                                deleteClock={deleteClock}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default ClockList;