import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Selection from './pages/Selection';
import WasteCollectionForm from './pages/WasteCollectionForm';
import RecyclingServices from './pages/RecyclingServicesForm';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/waste-collection-form" element={<WasteCollectionForm />} />
            <Route path="/recycling" element={<RecyclingServices />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;