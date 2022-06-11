import Moment from "moment";
import React from "react";

const BookListTable = (props) => {
    
    const {bookDate, bookStatus, location, custId, techId} = props.book;
        
    const getCust = () => {
        let cust = {}; 
        for (var i = 0; i<props.custs.length; i++){
            if(props.custs[i].custId === custId){
                Object.assign(cust, props.custs[i]);
            }
        }
        return cust;
    }

    const getTech = () => {
        let tech = {}; 
        for (var i = 0; i<props.techs.length; i++){
            if(props.techs[i].techId === techId){
                Object.assign(tech, props.techs[i]);
            }
        }
        return tech;
    }

    const {custFName, custLName } = getCust();
    const {techFName, techLName, techCategory} = getTech();
    
    return (
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                     {props.book.id}
                    </th>
                    {/* <td className='px-6 py-4'>{bookDate}</td> */}
                    <td className='px-6 py-4'>{custFName + ' ' + custLName}</td>
                    <td className='px-6 py-4'>{techFName + ' ' + techLName}</td>
                    <td className='px-6 py-4'>{techCategory}</td>
                    <td className='px-6 py-4'>{Moment(bookDate.toDate()).format('d MMM yyyy hh:mm')}</td>
                    <td className='px-6 py-4'>{location}</td>
                    <td className='px-6 py-4'>{bookStatus}</td>
                  </tr>
    );
}

export default BookListTable;