import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { LockClosedIcon } from "@heroicons/react/solid";
import { getAuth } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const currUser = getAuth().currentUser;
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (currUser != null) {
        // console.log(currUser);
        navigate("/technicians/all")
        };
  }, [currUser, loading]);

  async function loginHandler(e) {
    // e.preventDefault();
    if(email == "hifixit-admin@gmail.com"){
        await logInWithEmailAndPassword(email, password);
    }else{
        alert("Please signin as admin.")
        navigate("/")
    }
}
// console.log(currUser);

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
            
          </div>
          <form className='mt-8 space-y-6' action="/technicians/all">
            
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
              {/* <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div> */}

              {/* <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              <button
                onClick={(e) => loginHandler()}
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

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();
//     useEffect(() => {
//       if (loading) {
//         // maybe trigger a loading screen
//         return;
//       }
//       if (user) navigate("/technicians/all");
//     }, [user, loading]);
//     return (
//       <div className="login">
//         <div className="login__container">
//           <input
//             type="text"
//             className="login__textBox"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="E-mail Address"
//           />
//           <input
//             type="password"
//             className="login__textBox"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//           <button
//             className="login__btn"
//             onClick={() => logInWithEmailAndPassword(email, password)}
//           >
//             Login
//           </button>
//           <div>
//             <Link to="/reset">Forgot Password</Link>
//           </div>
//           <div>
//             Don't have an account? <Link to="/register">Register</Link> now.
//           </div>
//         </div>
//       </div>
//     );
//   }
//   export default Login;