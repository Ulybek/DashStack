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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='Page'>
          <Aside darkMode={darkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Main darkMode={darkMode} setDarkMode={setDarkMode} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
