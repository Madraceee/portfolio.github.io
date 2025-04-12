import { useEffect, useState } from 'react';

import './App.css';
import Home from './sections/Home';
import Aboutme from './sections/Aboutme';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import MobilePage from './sections/MobilePage';

import { inject } from '@vercel/analytics';

function App() {

  inject();

  const [isMobile, setIsMobile] = useState<boolean>(false);

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
