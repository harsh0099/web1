import React from 'react'
import './Mycourses.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import ProgressBar from 'react-bootstrap/ProgressBar';



export default function Mycourses() {


    function WithLabelExample() {
        const now = 60;
        
      }

  return (
    <div>
        <div>
         <div className='cc2'>
            
           <div className="container-fluid bg-primary py-5 mb-5 page-header">
               <div className="container py-5">
                   <div className="row justify-content-center">
                       <div className="col-lg-10 text-center">
                           <h1 className="display-3 text-white animated slideInDown">My Courses</h1>
                           <nav aria-label="breadcrumb">
                               <ol className="breadcrumb justify-content-center">
                                   <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                   <li className="breadcrumb-item"><a className="text-white" >Pages</a></li>
                                   <li className="breadcrumb-item text-white active" aria-current="page">My Courses</li>
                               </ol>
                           </nav>
                       </div>
                   </div>
               </div>
           </div>
          


            

               <div className='myc1'>
               <h1 className='hh1'>Let's Start Learning, Name</h1>

               <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant trident shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />

                      
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <br></br>
                  <ProgressBar now={60} label="60% Completed" />
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$13.99</h4>
                    <span className="text-danger">
                      <s>$20.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mb-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=400"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant olap shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>289</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span classNAme="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <br></br>
                  <ProgressBar now={60} label="55% Completed" />
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$14.99</h4>
                    <span className="text-danger">
                      <s>$21.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mb-3">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=400"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>Quant ruybi shirts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>145</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For women</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  <br></br>
                  <ProgressBar now={60} label="68% Completed" />
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$17.99</h4>
                    <span className="text-danger">
                      <s>$25.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

               </div>






               <div class="container-xxl py-5">
               <div class="container">
                   <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                       <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                       <h1 class="mb-5">Recommend Courses</h1>
                   </div>
                   <div class="row g-4 justify-content-center">
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-1.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 3149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-1.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 2149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-1.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 1149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-1.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 1149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-2.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 2149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                           <div class="course-item bg-light">
                               <div class="position-relative overflow-hidden">
                                   <img class="img-fluid" src="img/course-3.jpg" alt=""/>
                                   <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" >Read More</a>
                                       <a href="#" class="flex-shrink-0 btn btn-sm btn-primary px-3" >Join Now</a>
                                   </div>
                               </div>
                               <div class="text-center p-4 pb-0">
                                   <h3 class="mb-0">RS 4149.00</h3>
                                   <div class="mb-3">
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small class="fa fa-star text-primary"></small>
                                       <small>(123)</small>
                                   </div>
                                   <h5 class="mb-4">Web Design & Development Course for Beginners</h5>
                               </div>
                               <div class="d-flex border-top">
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                                   <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                   <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>30 Students</small>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
   </div>

    </div>

    </div>
  )
}
