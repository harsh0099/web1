// import React from 'react'
// import './bootstrap.min.css' 
// import './Dashboard.css'
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './Service.css'
// // import { Carousel } from 'react-responsive-carousel';

// export default function Service() {
//     return (
//         <div className='ser'>


//     <div className="container-fluid bg-primary py-5 bg-header jj" >
//             <div className="ser2 row py-5">
//                 <div className="col-12 pt-lg-5 mt-lg-5 text-center">
//                     <h1 className="display-4 text-white animated zoomIn">Services</h1>
//                     <a href="#" className="h5 text-white">Home</a>
//                     <i className="far fa-circle text-white px-2"></i>
//                     <a href="#" className="h5 text-white">Services</a>
//                 </div>
//             </div>
//         </div>

//         <div className="modal fade" id="searchModal" tabindex="-1">
//         <div className="modal-dialog modal-fullscreen">
//             <div className="modal-content hh">
//                 <div className="modal-header border-0">
//                     <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body d-flex align-items-center justify-content-center">
//                     <div className="input-group iij">
//                         <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
//                         <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>


//     <div className="ser3 container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container py-5">
//             <div className="section-title text-center position-relative pb-3 mb-5 mx-auto macc">
//                 <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
//                 <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
//             </div>
//             <div className="row g-5">
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
//                     <div className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center boox">
//                         <div className="service-icon">
//                             <i className="fa fa-shield-alt text-white"></i>
//                         </div>
//                         <h4 className="mb-3">Cyber Security</h4>
//                         <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
//                         <a className="btn btn-lg btn-dark rounded" href="">
//                             <i className="bi bi-arrow-right"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
//                     <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center boox">
//                         <div className="service-icon">
//                             <i className="fa fa-chart-pie text-white"></i>
//                         </div>
//                         <h4 className="mb-3">Data Analytics</h4>
//                         <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
//                         <a className="btn btn-lg btn-dark rounded" href="">
//                             <i className="bi bi-arrow-right"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
//                     <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center boox">
//                         <div className="service-icon">
//                             <i className="fa fa-code text-white"></i>
//                         </div>
//                         <h4 className="mb-3">Web Development</h4>
//                         <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
//                         <a className="btn btn-lg btn-dark rounded" href="">
//                             <i className="bi bi-arrow-right"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
//                     <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center boox">
//                         <div className="service-icon">
//                             <i className="fab fa-android text-white"></i>
//                         </div>
//                         <h4 className="mb-3">Apps Development</h4>
//                         <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
//                         <a className="btn btn-lg btn-dark rounded" href="">
//                             <i className="bi bi-arrow-right"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
//                     <div className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center boox">
//                         <div className="service-icon">
//                             <i className="fa fa-search text-white"></i>
//                         </div>
//                         <h4 className="mb-3">SEO Optimization</h4>
//                         <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
//                         <a className="btn btn-lg btn-dark rounded" href="">
//                             <i className="bi bi-arrow-right"></i>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
//                     <div className="position-relative bg-dark rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
//                         <h3 className="text-white mb-3">Call Us For Quote</h3>
//                         <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
//                         <h2 className="text-white mb-0">+012 345 6789</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    

//     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container py-5">
//             <div className="section-title text-center position-relative pb-3 mb-4 mx-auto jkl" >
//                 <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
//                 <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
//             </div>
//             <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
//                 <div className="testimonial-item bg-light my-4">
//                     <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
//                         <img className="img-fluid rounded kkl" src="https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg?auto=compress&cs=tinysrgb&w=400"  />
//                         <div className="ps-4">
//                             <h4 className="text-primary mb-1">Client Name</h4>
//                             <small className="text-uppercase">Profession</small>
//                         </div>
//                     </div>
//                     <div className="pt-4 pb-5 px-5">
//                         Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
//                     </div>
//                 </div>
//                 <div className="testimonial-item bg-light my-4">
//                     <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
//                         <img className="img-fluid rounded ggl" src="https://images.pexels.com/photos/3143813/pexels-photo-3143813.jpeg?auto=compress&cs=tinysrgb&w=400"  />
//                         <div className="ps-4">
//                             <h4 className="text-primary mb-1">Client Name</h4>
//                             <small className="text-uppercase">Profession</small>
//                         </div>
//                     </div>
//                     <div className="pt-4 pb-5 px-5">
//                         Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
//                     </div>
//                 </div>
//                 <div className="testimonial-item bg-light my-4">
//                     <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
//                         <img className="img-fluid rounded ggl" src="https://images.pexels.com/photos/326316/pexels-photo-326316.jpeg?auto=compress&cs=tinysrgb&w=400"  />
//                         <div className="ps-4">
//                             <h4 className="text-primary mb-1">Client Name</h4>
//                             <small className="text-uppercase">Profession</small>
//                         </div>
//                     </div>
//                     <div className="pt-4 pb-5 px-5">
//                         Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
//                     </div>
//                 </div>
//                 <div className="testimonial-item bg-light my-4">
//                     <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
//                         <img className="img-fluid rounded ggl" src="https://images.pexels.com/photos/2445781/pexels-photo-2445781.jpeg?auto=compress&cs=tinysrgb&w=400"/>
//                         <div className="ps-4">
//                             <h4 className="text-primary mb-1">Client Name</h4>
//                             <small className="text-uppercase">Profession</small>
//                         </div>
//                     </div>
//                     <div className="pt-4 pb-5 px-5">
//                         Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>


//     <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container">
//             <div className="row gx-5">
//                 <div className="col-lg-4 col-md-6 footer-about">
//                     <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-dark p-4">
//                         <a href="index.html" className="navbar-brand">
//                             <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2"></i>Startup</h1>
//                         </a>
//                         <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
//                         <form action="">
//                             <div className="input-group">
//                                 <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
//                                 <button className="btn btn-dark">Sign Up</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-lg-8 col-md-6">
//                     <div className="row gx-5">
//                         <div className="col-lg-4 col-md-12 pt-5 mb-5">
//                             <div className="section-title section-title-sm position-relative pb-3 mb-4">
//                                 <h3 className="text-light mb-0">Get In Touch</h3>
//                             </div>
//                             <div className="d-flex mb-2">
//                                 <i className="bi bi-geo-alt text-dark me-2"></i>
//                                 <p className="mb-0">Ahmedabad, India</p>
//                             </div>
//                             <div className="d-flex mb-2">
//                                 <i className="bi bi-envelope-open text-dark me-2"></i>
//                                 <p className="mb-0">technoithub@gmail.com</p>
//                             </div>
//                             <div className="d-flex mb-2">
//                                 <i className="bi bi-telephone text-dark me-2"></i>
//                                 <p className="mb-0">+91 9408032932</p>
//                             </div>
//                             <div className="d-flex mt-4">
//                                 <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
//                                 <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
//                                 <a className="btn btn-dark btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
//                                 <a className="btn btn-dark btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                             <div className="section-title gggi section-title-sm position-relative pb-3 mb-4">
//                                 <h3 className="text-light mb-0">Quick Links</h3>
//                             </div>
//                             <div className="link-animated d-flex flex-column justify-content-start gggi">
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Home</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>About Us</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Our Services</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Meet The Team</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Latest Blog</a>
//                                 <a className="text-light" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Contact Us</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                             <div className="section-title section-title-sm position-relative pb-3 mb-4">
//                                 <h3 className="text-light mb-0 gggi">Popular Links</h3>
//                             </div>
//                             <div className="link-animated d-flex flex-column justify-content-start gggi">
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Home</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>About Us</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Our Services</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Meet The Team</a>
//                                 <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Latest Blog</a>
//                                 <a className="text-light" href="#"><i className="bi bi-arrow-right text-dark me-2"></i>Contact Us</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="container-fluid aaa text-white">
//         <div className="container text-center">
//             <div className="row justify-content-end">
//                 <div className="col-lg-8 col-md-6">
//                     <div className="d-flexb align-items-center justify-content-center bbb">
//                         <p className="mb-0"><a className="text-white border-bottom" href="#"> </a>
// 						Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">Techno It Hub</a></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
   
   



//         </div>
//     )
// }
