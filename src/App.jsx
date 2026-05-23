import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
