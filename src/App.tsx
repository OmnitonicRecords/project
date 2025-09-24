import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Label from './components/Label';
import Announcements from './components/Announcements';
import Releases from './components/Releases';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-stone-50 text-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <Label />
      <Announcements />
      <Releases />
      <Artists />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;