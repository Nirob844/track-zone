import { useState } from "react";
import shortid from "shortid";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";

const LOCAL_CLOCK_INIT = {
  title: 'My Clock',
  timezone: '',
  offset: 0,
  date: null,
};

const App = () => {

  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([])

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = shortid.generate()
    setClocks([...clocks, clock])
  }

  const updateClock = (updateClock) => {
    const updateClocks = clocks.map(clock => {
      if (clock.id === updateClock.id) return updateClock
      else return clock
    })
    setClocks(updateClocks)
  }

  const deleteClock = (id) => {
    const updateClocks = clocks.filter(clock => clock.id !== id)
    setClocks(updateClocks)
  }

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        clocks={clocks}
        localClock={localClock.date}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  )
}

export default App