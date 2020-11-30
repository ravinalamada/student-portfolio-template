import React from 'react';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Design from '../Components/Design';
import Hobbies from '../Components/Hobbies';
import Projects from '../Components/Projects';

function App() {
  return (
    <main className="App">
      <section className="App--container">
        <About />
        <Hobbies />
      </section>
      <section className="App--container">
        <div className="App--wrapper">
          <Skills />
          <Design />
        </div>
        <Projects />
      </section>
    </main>
  )
}

export default App
