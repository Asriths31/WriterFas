import './App.css';
import { BrowserRouter, Link, Route ,Routes} from 'react-router-dom';
import LoginPageHolder from './pages/LoginPageHolder';
import Interests from './pages/Interests';
import Home from './pages/WriteGrid';
import Write from './pages/Write';
import Read from './pages/Read';
import Terms from './pages/Terms';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Search from './pages/Search';
import WriteGrid from './pages/WriteGrid';
import Profile from './pages/Profile';
import Cookies from 'universal-cookie';

function App() {
  const cookie = new Cookies();
  const name = cookie.get("name")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<LoginPageHolder/>}></Route>
          <Route path="/welcome" element={<Interests />}/>
          <Route path="/" element={<WriteGrid/>}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/read" element={<Read/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
