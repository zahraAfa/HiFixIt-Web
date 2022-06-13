import React, { useEffect, useState } from "react";
import TechReqTable from "./TechReqTable";
import { updateDoc, doc, where, query, collection, firebase, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from "../FirebaseConfig";

export default function TechRequests(props) {

  const [techStatus, setTechStatus] = useState('Off');
  const [techs, setTechs] = useState([]);
  
  
  useEffect(() => {
    const getPendingTechs = async () => {
      const techsCollectionRef = collection(db, "Technician");
      const pendingTechQuery = query(
        techsCollectionRef,
        where("techStatus", "==", "Pending")
        );
        const querySnapshot = await getDocs(pendingTechQuery);
        setTechs(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})));
      };
      
      getPendingTechs();
    }, []);
    
    const updateTechStatus = (techId, btn) => {
      const techsDocRef = doc(db, 'Technician', techId);
      if(btn === "accept"){
        setTechStatus('Off');
        updateDoc(techsDocRef, {techStatus});
      }else{
        // console.log("delete docs");
        deleteDoc(techsDocRef);
      }
    }; 

  const renderTechReq = techs.map((tech) => {
    return (
      <TechReqTable tech={tech} key={tech.id} clickHandler={updateTechStatus} />
    );
  });

  return (
    <>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Technician Requests</h1>
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Email
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Phone No.
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {renderTechReq}
                </tbody>
              </table>
            </div>
            {/* /End replace */}
          </div>
        </main>
    </>
  );
}

// export default TechList;