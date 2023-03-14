import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>ddddd</h1>
      <div className="App">
        <div className="container-search">
          <input className="input-search" type="text" />
          <button>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
