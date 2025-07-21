import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Aside.css'
import './Main.css';
import Aside from './Aside.jsx';
import Main from './Main.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='Page'>
          <Aside />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
