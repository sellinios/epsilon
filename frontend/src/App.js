import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ArticleBlock from './components/Blog/ArticleBlock/ArticleBlock';
import ArticleDetail from './components/Blog/ArticleDetail/ArticleDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news-events" element={<ArticleBlock />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
