import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import NewPage from './components/NewPage';
import UserSearch from './components/useSearch'
import Trying from './pages/trying';
import Tryingnew from './components/Tryingnew';
import NewClock from './components/Newclock';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/new-page" element={<NewPage />} />
      <Route path="/search" element={<UserSearch />} />
      <Route path="/try" element={<Trying/>}  />
      <Route path="/try1" element={<Tryingnew/>}  />
      <Route path="/try2" element={<NewClock/>} />
    </Routes>
  );
}
