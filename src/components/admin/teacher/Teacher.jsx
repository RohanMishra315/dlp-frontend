import { Outlet } from 'react-router-dom';
import CNavlink from '../../utils/CNavlink';
import React from 'react';
function Teacher() {

  return (
    <div>
      <div className='bg-white flex flex-wrap w-fit'>
        <CNavlink to='/admin/teacher/Allocation'>Allocation</CNavlink>
        <CNavlink to='/admin/teacher/createAllocation'>Create</CNavlink>
      </div>
      <div className=' w-fit mx-auto mt-5'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Teacher;