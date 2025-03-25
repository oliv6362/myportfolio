
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage';
import BackgroundPage from './pages/backgroundPage';
import ProjectPage from './pages/projectPage';
import ContactPage from './pages/contactPage';

import './assets/styles/homeStyle.css';

function App() {
  return (
    <div>
      <header>
        <h1>Portfolio App</h1>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/background" element={<BackgroundPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
