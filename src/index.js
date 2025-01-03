import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Image from './Components/Educafe/Image';
import EduPage from './Components/EducafePage/EduPage';
import NightOwl from './Components/NightOwl/NightOwl';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/image" element={<Image />} />
        <Route path="/edupage" element={<EduPage />} />
        <Route path="/nightowl" element={<NightOwl />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)