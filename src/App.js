import logo from './logo.svg';
import './App.css';
 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
     <navbar/>
  {/* les page */}
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
     <footer/>
    </BrowserRouter>
  );
}

export default App;
