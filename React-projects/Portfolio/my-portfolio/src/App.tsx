import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Content1 from './assets/components/Content1';
import Content2 from './assets/components/Content2';
import Content3 from './assets/components/Content3';
import Content4 from './assets/components/Content4';
import Content5 from './assets/components/Content5';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      once: true,
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div className='banner text-white'>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
