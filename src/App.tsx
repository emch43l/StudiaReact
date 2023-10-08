import { Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './pages/landingPage';
import AlbumPage from './pages/albumPage';
import PostPage from './pages/postPage';

function App() {

  return (
    <div className="relative h-100 w-100">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='user/:userId'>
          <Route path='albums' element={<AlbumPage/>}/>
          <Route path='posts' element={<PostPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
