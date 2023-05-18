import './App.css';
import Header from './components/Header';
import { NavLink, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Introduction from './components/Introduction';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* <div className='bg'></div> */}
      <Header />
      <Routes className='main-content'>
        <Route path='/introduction' element={<Introduction />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
