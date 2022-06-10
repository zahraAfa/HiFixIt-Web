import React from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { LogoutIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import TechListTable from "./TechListTable";

const navigation = [
  { name: 'Technicians', href: '#', current: true },
  { name: 'Requests', href: '#', current: false },
  { name: 'Customers', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TechList(props) {

    const renderTechList = props.techs.map((tech) => {
        return (
          <TechListTable
            tech={tech}
            key={tech.id}
          />
        );
      });

  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='nav-bg-custom-purple'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    {/* <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                        alt='Workflow'
                      />
                    </div> */}
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-purple-500 text-white"
                                : "text-gray-300 hover:bg-purple-400 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      <button
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
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-purple-500 text-white"
                          : "text-gray-300 hover:bg-purple-400 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className='pt-4 pb-3 border-t border-purple-400'>
                  <div className='flex items-center px-5'>
                    <button
                      type='button'
                      className='ml-auto bg-purple-500 flex-shrink-0 p-1 rounded-full text-white hover:bg-purple-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    >
                      <span className='sr-only'>View notifications</span>
                      <LogoutIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Technician List</h1>
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
                  {renderTechList}
                </tbody>
              </table>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}

// export default TechList;