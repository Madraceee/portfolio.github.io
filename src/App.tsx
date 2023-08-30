import { useEffect, useState } from 'react';

import './App.css';
import Landing from "./sections/Landing";
import Home from './sections/Home';
import Aboutme from './sections/Aboutme';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import MobilePage from './sections/MobilePage';

function App() {

  const [initialLoadAnimation, setInitialLoadAnimation] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onComplete = () => {
    setInitialLoadAnimation(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1089);
    };

    window.addEventListener('resize', handleResize);
  }, [])


  return (
    <div className="App">
      {
        isMobile ? (<MobilePage />) :
          initialLoadAnimation ?
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

      {
      }


    </div>
  );
}

export default App;
