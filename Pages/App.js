import React from 'react';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Design from '../Components/Design';
import Hobbies from '../Components/Hobbies';
import Projects from '../Components/Projects';

function App() {
  return (
    <main className="main">
      <section>
        <About />
        <Hobbies />
      </section>
      <section>
        <div>
          <Skills />
          <Design />
        </div>
        <Projects />
      </section>
    </main>
  )
}

export default App
