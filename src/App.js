import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { Profile } from './pages/Profile';
import { useState, createContext } from 'react';


export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Aleksandar");
  const [number, setNumber] = useState(7);
  return (
    <div className="App">
      <AppContext.Provider value={{number, setNumber}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Profile username={username} setUsername={setUsername}/>}/>
          <Route path='/contact' element={<Contact />}/>{/*Sada mozemo da obrisemo ove elemente, jer ih mozemo koristiti zbog createContext-fje */}
          <Route path='*' element={<h1>PAGE NOT FOUND ERROR 404</h1>}/> {/*KADA NAPRAVIMO GRESKU U URL-U RENDEROVACE SE OVA STRANICA! */}
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
