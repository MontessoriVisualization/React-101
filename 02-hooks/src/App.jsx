
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(10)


  const increment = () => {
  setCounter(counter + 1)
}
const decrement = () => {setCounter(counter - 1)
}
const reset = () => {setCounter(0)
}

  return (
    <>
          
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>Increment {counter}</button>
    <button onClick={decrement}>Decrement {counter}</button>
    <button onClick={reset}>Reset {counter}</button>
    
     
    </>
  )
}

export default App
