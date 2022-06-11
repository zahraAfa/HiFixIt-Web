import React from "react";

const CustListTable = (props) => {
    const {custFName, custLName, custEmail, custPhone, custCategory} = props.cust;
    return (
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                     {custFName + ' ' + custLName}
                    </th>
                    <td className='px-6 py-4'>{custEmail}</td>
                    <td className='px-6 py-4'>{custPhone}</td>
                  </tr>
    );
}

export default CustListTable;