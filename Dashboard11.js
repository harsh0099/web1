import React from 'react'
import './bootstrap.min.css' 
import './Dashboard11.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './style1.css'
// import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';

export default function Dashboard() {
    return (
        <div className='dash2'>
     
        {/* full screen */}
    <div className="modal fade gggh" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" >
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="eee input-group" >
                        <input type="text" className="form-control bg-transparent border-dark p-3" placeholder="Type search keyword"/>
                        <button className="btn btn-dark px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="head2 carousel-inner">
                <div className="carousel-item active">
                    <img className="dsh245 w-100 imgs1" src="https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Image"/>
                    <div className="dsh2 carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="chr p-3">
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Techno IT Hub</h1>
                            <div className="pt-5">
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight ">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100 imgs1" src="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Image"/>
                    <div className="dsh2 carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="chr p-3">
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Techno IT Hub</h1>
                            {/* <Button varient="outlined-info" className="btn py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</Button> */}
                            <div className="pt-5">
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight ">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="carousel-control-prev ml-5" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button> */}
            {/* <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>

        <div className="container-fluid facts h-9 py-5 pt-4 mt-4">
        <div className="container py-5 pt-lg-0 mt-9">
            <div className="row gx-0">
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div className="acc1 shadow d-flex align-items-center justify-content-center p-4" >
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" >
                            <i className="fa fa-2x fa-users ikon"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Happy Clients</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" >
                        <div className="bg-dark d-flex align-items-center justify-content-center rounded mb-2">
                            <i className="fa fa-2x fa-check text-white ikon"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="txt12 mb-0">Projects Done</h5>
                            <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div className="acc1 shadow d-flex align-items-center justify-content-center p-4">
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2">
                            <i className="fa fa-2x fa-award ikon"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Win Awards</h5>
                            <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="dshh23 container-fluid py-5 wow fadeInUp gggh" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="text-uppercase txt">About Us</h5>
                        <h1 className="mb-0 txt">The Best IT Solution </h1>
                    </div>
                    <p className="txt mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="txt mb-3"><i className="fa fa-check  me-3 txt"></i>Award Winning</h5>
                            <h5 className="txt mb-3"><i className="fa fa-check  txt me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="txt mb-3"><i className="fa txt fa-check  me-3"></i>24/7 Support</h5>
                            <h5 className="txt mb-3"><i className="fa fa-check  me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="fff txt11 d-flex align-items-center justify-content-center rounded" >
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2 txt">Call to ask any question</h5>
                            <h4 className=" mb-0 txt">+012 345 6789</h4>
                        </div>
                    </div>
                    <button className="acc1 btn-lg btn-outline-light spc">Request A Quote</button>
                </div>
                <div className="col-lg-5 ggg">
                    <div className="position-relative h-80">

                    <Carousel fade className="shedow">
      <Carousel.Item>
        <img
          className="d-block hhh w-100"
          src="https://images.pexels.com/photos/8533225/pexels-photo-8533225.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block hhh w-100"
          src="https://images.pexels.com/photos/6863385/pexels-photo-6863385.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 hhh"
          src="https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    
   
    <div className="Dashhh container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="Dasss1 container py-5">
            <div className="iii section-title text-center position-relative pb-3 mb-5 mx-auto" >
                <h5 className="fw-bold text-uppercase">Team Members</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-dark">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="https://images.pexels.com/photos/8533225/pexels-photo-8533225.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-dark">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item bg-light rounded overflow-hidden">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                <a className="btn btn-lg btn-dark btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-dark">Full Name</h4>
                            <p className="text-uppercase m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   
    {/* <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="acc1 row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-dark p-4 lastt">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Startup</h1>
                        </a>
                        <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="acc1 row gx-5">
                        <div className="col-lg-4 col-md-12 pt-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Get In Touch</h3>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-geo-alt text-dark me-2"></i>
                                <p className="mb-0">Ahmedabad, India</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-envelope-open text-dark me-2"></i>
                                <p className="mb-0">technoithub@gmail.com</p>
                            </div>
                            <div className="d-flex mb-2">
                                <i className="bi bi-telephone text-dark me-2"></i>
                                <p className="mb-0">+91 9408032932</p>
                            </div>
                            <div className="d-flex mt-4">
                                <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-dark btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title gggi section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0">Quick Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start gggi">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                            <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                <h3 className="text-light mb-0 gggi">Popular Links</h3>
                            </div>
                            <div className="link-animated d-flex flex-column justify-content-start gggi">
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Home</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>About Us</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Our Services</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Meet The Team</a>
                                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Latest Blog</a>
                                <a className="text-light" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid aaa text-white">
        <div className="container text-center">
            <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                    <div className="d-flexb align-items-center justify-content-center bbb">
                        <p className="mb-0"><a className="text-white border-bottom" href="#"> </a>
						Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">Techno It Hub</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
   
   
   
   
   
   
   
    </div>
















    )
}
