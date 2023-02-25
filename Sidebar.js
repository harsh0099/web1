import React from 'react'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  
  CDBSidebarSubMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Courses from './Courses';
import Internships from './Internships';
import Dashboard11 from './Dashboard11';
import { Registration } from './Registration';
import LearnM from './LearnM';
import Signin1 from './Signin1'
import Service from './Service'
import { Cources23 } from './Cources23'
import { MenuItem } from '@mui/material';
import Mycourses from './Mycourses';

export default function Sidebar() {
  return (

  <div className='sid20'>


    <div className='sid1'>
        <div className='sid2 p-fix'>
          <div style={{ display: 'flex', height: '127vh', overflow: 'scroll initial' }}>
              <div className='ha2'>
                <CDBSidebar className='a23 position-fixed' textColor="#fff" backgroundColor="#333" >
                          
                          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                                      Sidebar
                                    </a>
                                  </CDBSidebarHeader>
                      
                                <CDBSidebarContent className="sidebar-content">
                                  <CDBSidebarMenu>
          
                                        <Link to="/Signin">
                                        <p activeclassname="activeClicked">
                                          <CDBSidebarMenuItem icon="user">Signin
                                          </CDBSidebarMenuItem>
                                        </p>
                                        </Link>
                                        <Link to="/Dashboard">
                                        <p activeclassname="activeClicked">
                                          <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                                        </p>
                                        </Link>
                                        <Link to="/Courses">
                                        <p activeclassname="activeClicked">
                                          <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
                                        </p>
                                        </Link>
                                        <Link to="/Internships">
                                        <p activeclassname="activeClicked">
                                          <CDBSidebarMenuItem icon="user">Internship</CDBSidebarMenuItem>
                                        </p>
                                        </Link>


                                        <Link to="/Mycourses">
                                        <p activeclassname="activeClicked">
                                          <CDBSidebarMenuItem icon="user">Mycourses</CDBSidebarMenuItem>
                                        </p>
                                        </Link>

                                     

                                        

   
              
            
              
          
                                  </CDBSidebarMenu>
                                  
                                </CDBSidebarContent>
                              
                          </CDBSidebar> 

                          
                           
              </div>

                    <Routes>
                      
                      <Route path="/courses" element={<Cources23 />}></Route> 
                      <Route path="/internships" element={<Internships />}></Route> 
                      <Route path="/dashboard" element={<Dashboard11 />}></Route> 
                      <Route path="/Registration" element={<Registration />}></Route> 
                      <Route path="/Signin" element={<Signin1 />}></Route> 
                      <Route path="/LearnM" element={<LearnM />}></Route> 
                      <Route path="/service" element={<Service />}></Route>
                      <Route path="/Mycourses" element={<Mycourses />}></Route>
                
                    </Routes>

          </div>

          

        </div> 
        
    </div>
          



  </div>
       
  )
}


