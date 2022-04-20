import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/home/header';
import Home from './components/home/home';
import Write from './components/write';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
        <Header />
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="home" element={<Home />}/>
          <Route path="write" element={<Write />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
