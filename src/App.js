import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
              <Route path='/' exact Component={Home} />
            </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
