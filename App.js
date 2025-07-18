import React, { useState } from 'react';
import './App.css';

import NameForm from './components/NameForm';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [nameEntered, setNameEntered] = useState(false); // controls access

  return (
    <div className="App">
      {!nameEntered ? (
        <NameForm onSubmit={() => setNameEntered(true)} />
      ) : (
        <div className="content">
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
