import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import LoginPageHolder from './pages/LoginPageHolder';
import Interests from './pages/Interests';
import Home from './pages/Home';
import Write from './pages/Write';
import Read from './pages/Read';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<LoginPageHolder/>}></Route>
        <Route path="/welcome" element={<Interests />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/read" element={<Read/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
