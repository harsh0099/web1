import React from 'react'
import './Registration.css'
export const Registration = () => {
  return (
  <>
  <div className="reg">
    
  <section class=" w-100 ">
  <div class="container ">
 
    <div class="row justify-content-center align-items-center h-100">
      <div class="xyz col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration my-4" >
          <div class="card-body p-4 p-md-5">
            <div className='xyz2'>
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            </div>
            <form>

              <div class="row">
                <div class="col-md-12 mb-4">

                  <div class="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg"  placeholder="Full Name" />
                    
                  </div>

                </div>
                
                <div class="col-md-12 mb-4">

                  <div class="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg"  placeholder="College Name"/>
                    
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control-lg" placeholder="what's your expectation"/>
                  
                  </div>

                </div>
              
              </div>

              <div class="row">
                <div class="col-md-12 mb-4 pb-2">

                  
<br></br>
<div className="width1">
<div class="col-md-20 mb-12 pb-6">
                  <form />
                  
  <div className='fnt'>
  <label for="appt"><h3>Select a time:</h3></label> 
  <br></br> <br></br>
  <label for="appt"><h5>from :</h5></label>&nbsp;&nbsp;
  <input type="time" id="appt" name="appt"/>
  &nbsp;
  &nbsp;&nbsp;&nbsp;

  <label className='fnt' for="appt"><h5>To :</h5></label>&nbsp;
  <input type="time" id="appt" name="appt"/></div>
  </div>

  </div>
                </div>
                
              </div>

              <div class="row">
                <div class="col-12">

                  <select class="select form-control-lg">
                    <option value="1" >Choose Mode</option>
                    <option value="2">Online</option>
                    <option value="3">Offline</option>
                   
                  </select>
               

                </div>
              </div>

              <div class=" p" >
                <input class="btn btn-primary btn-lg my-4" type="submit" value="Submit"  />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
    
    </>
  )
}
