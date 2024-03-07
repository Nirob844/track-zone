import React from 'react';

const ClockList = ({ clocks }) => {
    return (
        <div>
            <h3>other clocks</h3>
            <hr />
            {clocks.length == 0 ?
                (<p>there is no clock create one</p>)
                :
                (
                    <ul>
                        {clocks.map(clock => (
                            <li key={clock.id}>
                                {JSON.stringify(clock)}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default ClockList;