import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Bookshelf from './components/Bookshelf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Bookshelf />} path="/" />
          <Route element={<SearchPage />} path="/search" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
