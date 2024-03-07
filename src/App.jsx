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

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList clocks={clocks} />
    </div>
  )
}

export default App