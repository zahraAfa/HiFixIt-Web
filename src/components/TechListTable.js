import React from "react";

const TechListTable = (props) => {
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
                  </tr>
    );
}

export default TechListTable;