import React from "react";
export default class Staff extends React.Component{
    render(){
        return(
            <>
            
            <p> Its a staff page</p>
            {/* <!-- carousel --> */}
         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-block w-100 aa"  alt="First slide">
                    <div class="p-3">
                        <h6 class=" himg">30% OFF</h6>
                        <p class="p1">When Buying Parts
                            <br/>with Installation
                        </p>
                        
                        <p>Installation of parts in services of<br/>
                      our partners.</p>
                      <br/>
                      <button class="btn btn-success">Shop Now</button>
                    </div></div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require("../images/banner1.jpeg")} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={require("../images/banner2.jpeg")} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div> 
          {/* <!-- flex image --> */}
          <div class="row">     
            <div class="col-sm-6">  
                <div class="ban1 container">
                  <h5 class="h1b">MOTOR OILS</h5>
                  <p class="p1b">Synthetic Motor oils free shipping<br/>
                    friction free life garunteed</p>
                    <button class="btn btn-warning">Shop Now</button>
                </div>
            </div>
            <div class="col-sm-6">
               <div class="ban2 container">
                    <h5 class="h1b">SAVE UPTO $40</h5>
                    <p class="p1b">Luxuries interior for real asethestic<br/>
                    Leather, Ivory and more</p>
                    <button class="btn btn-warning">Shop Now</button>
                </div>
            </div>
          </div>
          {/* <!-- the outline of features --> */}
      <div>
        <h2>Our Vision</h2>
        <p class="fnt_size">We offer a full range of garage services to vehicle owners located in Tucson area.<br/>
         All mechanic services are performed by highly qualified mechanics.<br/>
        We can handle any car problem.
        </p><br/>
        <p class="fnt_size">We offer a full range of garage services to vehicle owners in Tucson.<br/>
        Our professionals know how to handle a wide range of car services.<br/>
        Whether you drive a passenger car or medium sized truck or SUV,<br/>
        our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.
        </p>
      </div>
    
      {/* <!-- our service sutiable for --> */}
      <div class="d-flex flex-row conatiner">
        <div class="sm-3"> <img class="vedio_bg_img" src={require("../images/video-bg-01.webp")}/></div>
        <div class="sm-3">
          <h2>FIND YOUR DREAM CAR</h2>
          <p class="fnt_size">Synthetic engine oils are produced through a synthesis process that takes very 
            small molecules and assembles them into larger designer molecules with premium 
            lubricating properties.</p>
        </div>
      </div>
    
      {/* <!-- what we do --> */}
      <div>
        <div class="center">
          <p>What we do?</p>
          <h5>AWESOME SERVICES</h5>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3 we_img_1">
            <div class="shadow-lg p-3 mb-5 bg-body rounded text-light">BATTERS</div>
          </div>
          <div class="col-3 we_img_2">
            
          </div>
          <div class="col-3 we_img_3">
            
          </div>
        </div>
        <div class="row">
        <div class="col-1 "></div>
        <div class="col-3 we_img_4">
          
        </div>
        <div class="col-3 we_img_5">
          
        </div>
        <div class="col-3 we_img_6">
          
        </div>
      </div>
    </div>
    {/* <!-- news and lastest update --> */}
    <div>
      <h4 class="up_h">Latest Updates</h4>
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md d-flex flex-row bg-light">
                <img src={require("../images/deco-image.png")}/>
                <div>
                  <h5 class="up_img_h">How to make the most of <br/>your test drive</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 bg-light">
            <img src={require("../images/deco-image2.png")} alt=""/>
            
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 d-flex flex-row bg-light">
            <div>
              <h5 class="up_img_h">How to decorate your test car for <br/>hallowns</h5>
            </div>
            <img src={require("../images/deco-image3.png")}/>
          </div>
         
          <div class="col-md-4 bg-light">
              <h5 class="up_img_h p-3">How to jump start your <br/>car for maintance</h5>
          </div>
    </div>
    {/* <!-- FAQs   --> */}
    <h4 class="up_h">Frquentely Asked Questions</h4>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What kind of car services can i avail with Mcarcare?
            </button>
          </h2>
        </div>
    
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            Synthetic engine oils are produced through a synthesis process that takes very 
            small molecules and assembles them into larger designer molecules with premium 
            lubricating properties.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              what are the basic charges for my car services in Coimbatore?
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            Some placeholder content for the second accordion panel. This panel is hidden by default.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo1">
          <h2 class="mb-0">
            <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
              Do i have to drop my car to the workshop?
            </button>
          </h2>
        </div>
        <div id="collapseTwo1" class="collapse" aria-labelledby="headingTwo1" data-parent="#accordionExample">
          <div class="card-body">
            Some placeholder content for the second accordion panel. This panel is hidden by default.
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What if i am not satisfied wiht my car service?
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
          </div>
        </div>
      </div>
    </div>
    </div>
            </>
        );
    }
}