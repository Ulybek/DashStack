import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Aside.css'
import './Main.css';
import Aside from './Aside.jsx';
import Main from './Main.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div className='Main--page'>
        <Aside />
        <Main />
      </div>
    </div>

  )
}

export default App
