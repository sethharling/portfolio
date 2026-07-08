import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import ChatBot from '../ChatBot/ChatBot';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [direction, setDirection] = useState(0);
  
  // Page order for determining swipe direction
  const pageOrder = ['home', 'about', 'portfolio', 'resume'];
  
  const handlePageChange = (newPage) => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(newPage);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Title />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <Title />;
    }
  };

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      <div className="page-content">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.25,
              ease: "easeOut"
            }}
            className="page-transition"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
      <ChatBot />
    </div>
  );
}

export default Main;
