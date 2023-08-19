import { RefObject, useEffect, useRef, useState } from 'react';

import './App.css';
import Landing from "./sections/Landing";
import Home from './sections/Home';
import Aboutme from './sections/Aboutme';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';

function App() {

  const [initialLoadAnimation, setInitialLoadAnimation] = useState<boolean>(true);

  const onComplete = () => {
    setInitialLoadAnimation(false);
  }


  return (
    <div className="App">
      {initialLoadAnimation ?
        (<Landing onComplete={onComplete} />) :
        (
          <div className='page'>
            <Home />
            <Aboutme />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
        )
      }


    </div>
  );
}

export default App;
