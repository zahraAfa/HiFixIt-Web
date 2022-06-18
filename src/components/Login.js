import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { LockClosedIcon } from "@heroicons/react/solid";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const currUser = auth.currentUser;
  useEffect(() => {
    if (user) {
        console.log(user);
        navigate("/technicians/all")
        };
        if (error){
          alert('Error');
        }
  }, []);

  async function loginHandler(e) {
    e.preventDefault();
    console.log("login");
    if(email === "hifixit-admin@gmail.com"){
        await logInWithEmailAndPassword(email, password);
        navigate("/technicians/all")
    }else{
        alert("Please signin as admin.")
        navigate("/")
    }
}

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            {!loading? 
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>:<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              <i>Loading...</i>
            </h2>
            }
            
          </div>
          <form className='mt-8 space-y-6' onSubmit={loginHandler}>
            
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
            </div>

            <div>
              <button 
                type="submit"
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent hover:text-indigo-200 text-sm font-medium rounded-md text-white nav-bg-custom-purple hover:nav-bg-custom-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-white group-hover:text-indigo-200'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}