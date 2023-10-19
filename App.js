import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'; 

function App() {
  return (


      <>
      <Main>
    <Navbar />

<Routes>

   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/*' element={<Error />} />
    
</Routes>
      </Main>
      </>
  );
}

export default App;
