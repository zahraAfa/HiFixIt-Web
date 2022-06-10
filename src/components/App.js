import './App.css';
import '../index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './MenuBar';
import HomePageHeader from './HomePageHeader';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          exact
          element={<>
          <MenuBar />
          <HomePageHeader />
          </>}
        >
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
