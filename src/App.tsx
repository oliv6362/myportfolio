
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Header from './components/molecules/header';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App
