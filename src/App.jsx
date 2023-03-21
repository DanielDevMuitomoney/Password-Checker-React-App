import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Toast from './components/Toast'

function App() {

  const [password, setPassword] = useState('')
const [render, setRender] = useState(false)
const [message, setMessage] = useState(false)
  function handlePasswordChecker() {
    //empty verify
     if (password === '') {
      ShowToast('Cadê a senha? 🕵🏽‍♀️')

     }
     else if(password.length<8){
      ShowToast('A senha precisa de no minímo 8 dígitos 🙁')
     }






  }

  function ShowToast(message){
    setMessage(message)
   setRender(true)


     setTimeout(() => {
        setRender(false)
      }, 3000)
     
  }
  return (
    <>
      <div className="App">
        <h1>Welcome to password checker</h1>
        <div className="container-search">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input-search"
            type="text"
          />
          <button onClick={handlePasswordChecker}>Send</button>
        </div>

        {render ? <Toast className="toast-fadeout">{message}</Toast> : null}
      </div>
    </>
  )
}

export default App
