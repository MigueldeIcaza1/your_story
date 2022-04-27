import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from './components/home/header';
import Home from './components/home/home';
import Write from './components/write';
import Contact from './components/contact';
import Explore from './components/explore';
import Story from './components/story';

function App() {
  return (
    <div className="App">
        <Header />
      <BrowserRouter>
        <Routes>

      
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/write" element={<Write />} />
          <Route exact path="/share" element={<Write />} />
          <Route exact path="/explore" element={<Explore />} />          
          <Route exact path="/grasp" element={<Explore />} />
          <Route exact path="/writing/:id" element={<Story />} /> 
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
