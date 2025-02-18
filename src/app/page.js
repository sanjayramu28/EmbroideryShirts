import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Process from './Components/Process/Process';
import Contact from './Components/Contact/Contact';

export default function Page() {
  return (
    <>
    <Navbar/>
    <Home />
    <About/>
    <Process/>
    <Contact/>
    </>
  );
}
