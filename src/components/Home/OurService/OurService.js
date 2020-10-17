import React from 'react';
import ServiceList from './ServiceList/ServiceList';
import './OurService.css'

const serviceList = [
    {
        title: 'Industrial Sewing Machine',
        description: 'We can provide support all kinds of industrial sewing machine.',
        img: "https://1.bp.blogspot.com/-m266oOBBGq8/X4dPqOtNhdI/AAAAAAAAoV0/9KK8iqSD2H896qNcV9Txi6J_0UH2WUkpgCLcBGAsYHQ/s0/service1.png"
    },
    {
        title: 'Industrial Furniture',
        description: 'Our industrial world class furniture service is best fit for your industry.',
        img: "https://1.bp.blogspot.com/-0jnFDfyjJSM/X4dPqOms6yI/AAAAAAAAoVs/_NegFoAHI7ohTKVFrHAP4-4Vl-umpNdMwCLcBGAsYHQ/s0/service2.png"
    },
    {
        title: 'Garment Machinery',
        description: 'We provide complete garment machinery solutions.',
        img: "https://1.bp.blogspot.com/-ocmYM-I8OjA/X4dPqETy4pI/AAAAAAAAoVw/SLxq0JcwyfEFxQ9rTnGy09rb7yEsr6dgACLcBGAsYHQ/s0/service3.png"
    }
]

const OurService = () => {

    return (
        <section className="my-5 py-5">
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
        </section>
    );
};

export default OurService;