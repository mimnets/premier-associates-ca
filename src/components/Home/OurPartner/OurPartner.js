import React from 'react';
import './OurPartner.css'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import slack from '../../../images/logos/slack.png'


const OurPartner = ({brand}) => {
    return (
        <div className="col-md-3"> 
            <div>
                <img src={brand.img} alt=""/>
            </div>
        </div>
        // <div className="container d-flex align-self-center">
        //     <div className="col-md-3">
        //         <img src={google} alt="" className="img-fluid" height="50px" width="100px"/>
        //     </div>
        //     <div className="col-md-3">
        //     <img src={airbnb} alt="" className="img-fluid" height="50px" width="100px"/>
        //     </div>
        //     <div className="col-md-3">
        //     <img src={uber} alt="" className="img-fluid" height="50px" width="100px"/>
        //     </div>
        //     <div className="col-md-3">
        //     <img src={slack} alt="" className="img-fluid" height="50px" width="100px"/>
        //     </div>
            
        // </div>
//         <div class="brands">
//     <div class="container">
//         <div class="row">
//             <div class="col">
//                 <div class="brands_slider_container">
//                     <div class="owl-carousel owl-theme brands_slider">
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_1.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_2.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_4.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_5.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_3.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_6.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_7.jpg" alt=""/></div>
//                         </div>
//                         <div class="owl-item">
//                             <div class="brands_item d-flex flex-column justify-content-center"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1561819026/brands_8.jpg" alt=""/></div>
//                         </div>
//                     </div>
//                     <div class="brands_nav brands_prev"><i class="fas fa-chevron-left"></i></div>
//                     <div class="brands_nav brands_next"><i class="fas fa-chevron-right"></i></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
    );
};

export default OurPartner;