import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileAudioReceiver from './pages/mobileAudioReciver';
import MobileAudioSender from './pages/mobileAudioSender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/audio-reciever" element={<MobileAudioReceiver />} />
          <Route path="/audio-sender" element={<MobileAudioSender />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
