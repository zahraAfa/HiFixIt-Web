import './App.css';
import '../index.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './MenuBar';
import HomePageHeader from './HomePageHeader';
import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  // const ref = firebaseConfig.firestore().collection("Technician");
  // console.log(ref);

  const [techs, setTech] = useState([]);

  const techsCollectionRef = collection(db, 'Technician');

  useEffect (()=>{

    const getTechs = async () => {
      const data = await getDocs(techsCollectionRef);
      console.log(data);
    }

  },[])


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
