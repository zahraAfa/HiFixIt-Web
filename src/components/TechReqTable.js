import React from "react";

const TechReqTable = (props) => {
    const {techFName, techLName, techEmail, techPhone, techCategory} = props.tech;
    return (
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                     {techFName + ' ' + techLName}
                    </th>
                    <td className='px-6 py-4'>{techEmail}</td>
                    <td className='px-6 py-4'>{techPhone}</td>
                    <td className='px-6 py-4'>{techCategory}</td>
                    <td className='px-6 py-4 text-right'>
                      <a
                        href='#'
                        className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        Accept
                      </a>
                      <a
                        href='#'
                        className='ml-10 font-medium text-red-600 dark:text-red-500 hover:underline'
                      >
                        Reject
                      </a>
                    </td>
                  </tr>
    );
}

export default TechReqTable;