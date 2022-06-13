import './App.css';
import '../index.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './MenuBar';
import HomePageHeader from './HomePageHeader';
import { db } from '../FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import TechList from './TechList';
import MenuBarAdmin from './MenuBarAdmin';
import TechRequests from './TechRequests';
import CustList from './CustList';
import BookList from './BookList';
import Login from './Login';

function App() {

  // const ref = firebaseConfig.firestore().collection("Technician");
  // console.log(ref);

  const [techs, setTech] = useState([]);
  const [custs, setCust] = useState([]);
  const [bookings, setBooking] = useState([]);

  const techsCollectionRef = collection(db, 'Technician');
  const custsCollectionRef = collection(db, 'Customer');
  const booksCollectionRef = collection(db, 'Booking');

  useEffect (()=>{

    const getTechs = async () => {
      const TechQuery = query(
        techsCollectionRef,
        where("techStatus", "!=", "Pending")
      );
      const data = await getDocs(TechQuery);
      setTech(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    const getCusts = async () => {
      const data = await getDocs(custsCollectionRef);
      setCust(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      setBooking(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    getTechs();
    getCusts();
    getBooks();
    
  },[])
  // },[bookings, custs, techs])
  
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
        <Route path='customers/all' element={
          <div className='min-h-full'>
            <MenuBarAdmin nav={2} />
            <CustList custs={custs}/>
          </div>
        } ></Route>
        <Route path='bookings/all' element={
          <div className='min-h-full'>
            <MenuBarAdmin nav={3} />
            <BookList books={bookings} techs={techs} custs={custs} />
          </div>
        } ></Route>
        <Route path='admin-login' element={
          <div className='min-h-full'>
            <MenuBar />
            <Login />
          </div>
        } ></Route>
      </Routes>
    </Router>
  );
}

export default App;
