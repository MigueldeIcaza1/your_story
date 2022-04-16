import './App.css';
import Home from './components/home';
import Write from './components/write';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="home" element={<Home />}/>
          <Route path="write" element={<Write />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
