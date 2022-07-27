import React from "react";

const TechReqTable = (props) => {
    const {techFName, techLName, techEmail, techPhone, techCategory, techId} = props.tech;

    return (
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <th
          scope='row'
          className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
        >
          {techFName + " " + techLName}
        </th>
        <td className='px-6 py-4'>{techEmail}</td>
        <td className='px-6 py-4'>{techPhone}</td>
        <td className='px-6 py-4'>{techCategory}</td>
        <td className='px-6 py-4 text-right'>
          <button onClick={() => props.clickHandler(techId, 'accept')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Accept
          </button>
          <button onClick={() => props.clickHandler(techId, 'reject')} className='ml-10 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
            Reject
          </button>
        </td>
      </tr>
    );
}

export default TechReqTable;