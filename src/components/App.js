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
import TechRequests from './TechRequests';

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
          <div className='min-h-full'>
            <MenuBarAdmin nav={0} />
            <TechList techs={techs} />
          </div>
          }></Route>
        <Route path='technicians/requests' element={
          <div className='min-h-full'>
          <MenuBarAdmin nav={1} />
          <TechRequests techs={techs} />
        </div>
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
