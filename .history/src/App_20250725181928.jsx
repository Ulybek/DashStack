import { useState, useEffect } from 'react';
import './App.css';
import './Aside.css';
import './Main.css';
import Aside from './Aside.jsx';
import Main from './Main.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className={`Page ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Aside open={sidebarOpen} setOpen={setSidebarOpen} darkMode={darkMode} />
          <Main darkMode={darkMode} setDarkMode={setDarkMode} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
