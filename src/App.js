import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/about/about';
import GetStarted from './components/pages/Get-started/Get-started';
import TextEditor from './components/pages/TextsGeneration/TextEdtior';
// import LogIn from './components/pages/Log-in/LogIn';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
  
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('userLanguage');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/text-editor" element={<TextEditor />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
