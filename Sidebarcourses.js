import React from 'react'
import Courses from "./Courses"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import { BsTypeH3 } from 'react-icons/bs';
// import LearnM from './LearnM';

export default function Sidebar_courses() {
  return (
    <div>
         <div style={{ display: 'flex', height: '127vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Sidebar
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <p activeclassname="activeClicked">
              {/* <Link to="./App"></Link> */}
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </p>
            <p activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Courses</CDBSidebarMenuItem>
            </p>
            <p activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Internship</CDBSidebarMenuItem>
            </p>
            {/* <p activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </p>
            <p target="#" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </p> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
          
        </CDBSidebar>
        <div>
       
        </div> <Courses/>
      </div>
     


    </div>
  )
}
