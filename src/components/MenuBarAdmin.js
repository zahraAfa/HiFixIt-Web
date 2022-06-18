import React, {useEffect} from "react";
import { Disclosure } from '@headlessui/react'
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { logout } from "../FirebaseConfig";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const navigation = [
  { name: 'Technicians', nav: '/technicians/all', current: false },
  { name: 'Requests', nav: '/technicians/requests', current: false },
  { name: 'Customers', nav: '/customers/all', current: false },
  { name: 'Bookings', nav: '/bookings/all', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuBarAdmin(props) {
  
  const nav = useNavigate();
  const auth = getAuth();
  const currUser = auth.currentUser;
  const [user, loading, error] = useAuthState(auth);

  useEffect(()=>{
    if (currUser == null || user == null){
      nav("/");
    }
  },[])

  function logoutHandler(){
    console.log("Logout");
    logout();
    
    if(user == null){
      nav("/");
    }
  }

  return (
        <Disclosure as='nav' className='nav-bg-custom-purple'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map((item, index) => {
                            if(index === props.nav){item.current=true;}
                            else{item.current=false;}
                        
                            return <NavLink to={item.nav} key={item.name} className={classNames(
                              item.current
                                ? "bg-purple-500 text-white"
                                : "text-gray-300 hover:bg-purple-400 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )} aria-current={item.current ? "page" : undefined} >{item.name}</NavLink>
                          // return(<a
                          //   key={item.name}
                          //   className={classNames(
                          //     item.current
                          //       ? "bg-purple-500 text-white"
                          //       : "text-gray-300 hover:bg-purple-400 hover:text-white",
                          //     "px-3 py-2 rounded-md text-sm font-medium"
                          //   )}
                          //   aria-current={item.current ? "page" : undefined}
                          // >
                          //   {item.name}
                          // </a>);
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      <button
                      onClick={()=>logoutHandler()}
                        type='button'
                        className='bg-purple-500 p-1 rounded-full text-white hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                      >
                        <span className='sr-only'>Sign out</span>
                        <LogoutIcon className='h-6 w-6' aria-hidden='true' />
                      </button>

                      {/* Profile dropdown */}
                      
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-purple-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map((item, index) => {
                    if(index === props.nav){item.current=true;}
                    else{item.current=false;}
                    return (<Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      current={(index === props.nav)? item.current=true : item.current=false}
                      className={classNames(
                        item.current
                          ? "bg-purple-500 text-white"
                          : "text-gray-300 hover:bg-purple-400 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>);
                  })}
                </div>
                <div className='pt-4 pb-3 border-t border-purple-400'>
                  <div className='flex items-center px-5'>
                    <button
                      onClick={() => logoutHandler()}
                      type='button'
                      className='ml-auto bg-purple-500 flex-shrink-0 p-1 rounded-full text-white hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    >
                      <span className='sr-only'>Sign out</span>
                      <LogoutIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
  );
}