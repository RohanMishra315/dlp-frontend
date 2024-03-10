import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { RiAdminLine, RiBox2Line, RiHome2Line, RiLoginBoxLine, RiLogoutBoxFill, RiSettings3Line, RiTable2, RiTableAltLine, RiTableLine, RiTabletLine, RiUserLine, RiUserSettingsLine } from 'react-icons/ri'; // Import icons
import Home from './components/Home';
import TeacherAlloc from './components/allocations/TeacherAlloc';
import StudentAlloc from './components/allocations/StudentAlloc';
import imageSrc from './assets/svg.jpg';
import ClassroomAlloc from './components/allocations/ClassroomAlloc';
import Ttgeneration from './components/dashboard/Ttgenration';
import Settings from './components/Settings';
import Snlin from './components/Snlin';

function App() {
  return (
    <Router>
      <main className='bg-slate-300 h-screen flex gap-1 '>
        <Navigation />
        <div className="dashboard p-4 mx-auto flex-1">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/teacherAlloc" element={<TeacherAlloc />} />
            <Route path="/studentAlloc" element={<StudentAlloc />} />
            <Route path="/classroomAlloc" element={<ClassroomAlloc />} />
            <Route path="/ttgen" element={<Ttgeneration />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Snlin />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <div className='navigation-sidebar flex flex-col justify-between bg-white'>
      <div >
        <img src={imageSrc} alt="SVG" className=' mb-4' />
        <p className='text-center text-sm border-t-2 border-b-2 py-2'>Welcome User</p>
        <CustomNavLink to="/" currentPath={location.pathname} icon={<RiHome2Line />}>Home</CustomNavLink>
        <CustomNavLink to="/teacherAlloc" currentPath={location.pathname} icon={<RiUserLine />}>Teacher Alloc</CustomNavLink>
        <CustomNavLink to="/studentAlloc" currentPath={location.pathname} icon={<RiUserSettingsLine />}>Student Alloc</CustomNavLink>
        <CustomNavLink to="/classroomAlloc" currentPath={location.pathname} icon={<RiBox2Line />}>Classroom Alloc</CustomNavLink>
        <CustomNavLink to="/ttgen" currentPath={location.pathname} icon={<RiTableLine/>}>Time Table</CustomNavLink>
      </div>
      <div>
        <CustomNavLink to="/settings" currentPath={location.pathname} icon={<RiSettings3Line />}>Settings</CustomNavLink>
        <CustomNavLink to="/signup" currentPath={location.pathname} icon={<RiLoginBoxLine />}>LogOut</CustomNavLink>
      </div>
    </div>
  );
}

function CustomNavLink({ to, currentPath, icon, children }) {
  const isActive = to === currentPath;

  return (
    <NavLink to={to} className={`route flex items-center ${isActive ? 'bg-red-800 text-white' : 'text-gray-700 hover:bg-slate-200'} py-2 px-4`} activeClassName="bg-red-400 text-white">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </NavLink>
  );
}

export default App;
