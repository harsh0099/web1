import React from 'react'

import './LearnM.css'

import {AiOutlineHeart} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import Sidebar from 'cdbreact/dist/components/Sidebar';
export default function 
() {
  return (
   <>
   

  
          <div className='main22' >
             <div className="container11"  >
                <div className="headd">
                  

                <Card className="crd1" style={{ width: '26rem' }}>
                  <Card.Img variant="top" src="data:image/png;base64,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" />
                      <Card.Body>
                           <Card.Title>Python Django Crash Course</Card.Title>
                               <div className="sline22">
                                <Button className="btn22" variant="primary">Buy Now</Button>&nbsp;&nbsp;&nbsp;
                                <AiOutlineHeart className="hicon22"> </AiOutlineHeart>
                                </div>

                                <div className="tline">
                                    <a href="#">Share </a>&nbsp;&nbsp;&nbsp;
                                    <a href="#">Gift</a> &nbsp;&nbsp;&nbsp;
                                    <a href="#">Coupen</a>
                                </div>-
                      </Card.Body>
                  </Card>
                          <div className="rside">
                            
                              <h2 className='h22'>Quick Glance</h2>
                              <p id="txt" className='h22'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                              </div>
                          </div>
    
                          <div className="kmore11">
                              <Card className="abcd11">
                                    <Card.Body>
                                        <Card.Title>What you'll learn</Card.Title>
                                          <Card.Text className="txt1">
                                            <ul>
                                                <li>Learn how to use Python for web development with Django</li>
                                                <li>Build real projects and apply what you learned in a full blog website created in the course</li>
                                                <li>Choose between the full course or the included course summary to get you started quickly</li>
                                            </ul>
                            
                                        </Card.Text>
                                  </Card.Body>
                              </Card>
                                  <div className='abcd23'>
                                    <Card className="about2 my-3">
                                      
                                      This course includes:
                                          <ul>
                                              <li>23 hours on-demand video</li>
                                              <li>   23 articles</li>
                                              <li>1 downloadable resource</li>
                                              <li>Access on mobile and TV</li>
                                              <li>Certificate of completion</li>
                                              <li>Closed captions</li>
                                          </ul>
                                    </Card>

                                  </div>
    
                </div> 
             </div>
          </div>

   </>
  )
}
