import React, {useEffect} from 'react';
import BookListTable from "./BookListTable";

export default function BookList(props) {

    const renderBookList = props.books.map((book) => {
        return (
          <BookListTable
            book={book}
            key={book.id}
            custs={props.custs}
            techs={props.techs}
          />
        );
      });

  return (
    <>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Booking List</h1>
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
                      Booking ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Customer Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Technician Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Reparation Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Date
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Location
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {renderBookList}
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