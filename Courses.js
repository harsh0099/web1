import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Courses.css';
import {useNavigate} from 'react-router-dom'
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';

// import { RegistrationForm } from './RegistrationForm';



function Courses() {


  const navigate = useNavigate();
  const change = () => {
    let path = '/LearnM';
    navigate(path)
  }

  
  const change1 = () => {
    let path = '/Registration';
    navigate(path)
  }
  return (
<>
     
<div className="container1 p-3">
<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 1</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <div>
      
    </div>
   
            <Button variant="contained" onClick={change1}><b>Registration</b></Button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <Button variant="outlined" onClick={change}><b>Learn More</b></Button>
         
          </MDBCardBody>
       
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 2</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText><br></br>
           
            <Button variant="contained" onClick={change1}>Registration</Button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <Button variant="outlined" onClick={change}>Learn More</Button>
         
          </MDBCardBody>
         
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 3</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
            <Button variant="contained" onClick={change1}>Registration</Button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <Button variant="outlined" onClick={change}>Learn More</Button>
         
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    </MDBRow>

<div className="container2 my-2"  >
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 my-3' >
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 4</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <button type="button" className="btn btn-primary offset-sm-2 " onClick={change1}>Registration</button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button type="button" className="btn btn-secondary" onClick={change}>Learn More</button>
         
          </MDBCardBody>
         
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 5</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText><br></br>
            <button type="button" className="btn btn-primary offset-sm-2 " onClick={change1}>Registration</button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button type="button" className="btn btn-secondary" onClick={change}>Learn More</button>
         
          </MDBCardBody>
        
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='caard2 h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Course 6</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
            <button type="button" className="btn btn-primary offset-sm-2 " onClick={change1}>Registration</button>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button type="button" className="btn btn-secondary" onClick={change}>Learn More</button>
         
          </MDBCardBody>
        
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
    </div>
    </div>
   
</>
  );
}

export default Courses;
