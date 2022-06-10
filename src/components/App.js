import './App.css';
import '../index.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './MenuBar';
import HomePageHeader from './HomePageHeader';
import { db } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import TechList from './TechList';
import MenuBarAdmin from './MenuBarAdmin';

function App() {

  // const ref = firebaseConfig.firestore().collection("Technician");
  // console.log(ref);

  const [techs, setTech] = useState([]);

  const techsCollectionRef = collection(db, 'Technician');

  useEffect (()=>{

    const getTechs = async () => {
      const data = await getDocs(techsCollectionRef);
      setTech(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    getTechs();

  },[])


  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <MenuBar />
              <HomePageHeader />
            </>
          }
        ></Route>
        <Route path='technicians/all' element={
            // <MenuBarAdmin />
          <div className='min-h-full'>
            <MenuBarAdmin />
            <TechList techs={techs} />
          </div>
          }></Route>
        <Route path='technicians/request'></Route>
      </Routes>
    </Router>
  );
}

export default App;
