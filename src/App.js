import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Hero from './components/Hero';
import MailingList from './components/MailingList';
import AboutButton from './components/AboutButton';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutButton></AboutButton>
      <Services></Services>
      <MailingList/>
      <Footer></Footer>
    </div>
  );
}

export default App;
