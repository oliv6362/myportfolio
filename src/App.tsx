
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
