import './App.css';
import '../index.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import MenuBar from './MenuBar';
import HomePageHeader from './HomePageHeader';

function App() {
  return (
    <div>
      <MenuBar />
      <HomePageHeader />
    </div>
  );
}

export default App;
