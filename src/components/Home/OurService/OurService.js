import React from 'react';
import ServiceList from './ServiceList/ServiceList';
import './OurService.css'

const serviceList = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: "https://1.bp.blogspot.com/-m266oOBBGq8/X4dPqOtNhdI/AAAAAAAAoV0/9KK8iqSD2H896qNcV9Txi6J_0UH2WUkpgCLcBGAsYHQ/s0/service1.png"
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: "https://1.bp.blogspot.com/-0jnFDfyjJSM/X4dPqOms6yI/AAAAAAAAoVs/_NegFoAHI7ohTKVFrHAP4-4Vl-umpNdMwCLcBGAsYHQ/s0/service2.png"
    },
    {
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: "https://1.bp.blogspot.com/-ocmYM-I8OjA/X4dPqETy4pI/AAAAAAAAoVw/SLxq0JcwyfEFxQ9rTnGy09rb7yEsr6dgACLcBGAsYHQ/s0/service3.png"
    }
]

const OurService = () => {

    return (
        <div className="container service-container">
            <div className="mt-5">
                <h1 style={{textAlign: 'center'}}>Provide awesome <span style={{ color:'green'}}>services</span></h1>
            </div>
            <div className="row mt-5">
                {
                    serviceList.map(sl => <ServiceList slist={sl}></ServiceList>)
                }
            </div>
        </div>
    );
};

export default OurService;