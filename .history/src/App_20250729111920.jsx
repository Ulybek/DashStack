import { useState, useEffect, useRef } from 'react';
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

  const asideRef = useRef(null);

  const mainRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(e.target) &&
        window.innerWidth <= 768 &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <BrowserRouter>
      <div className='App'>
        <div className='Page'>
          <Aside darkMode={darkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} asideRef={asideRef} />
          <Main darkMode={darkMode} setDarkMode={setDarkMode} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
