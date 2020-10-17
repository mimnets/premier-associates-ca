import React from 'react';
import ServiceList from './ServiceList/ServiceList';
import './OurService.css'

const serviceList = [
    {
        title: 'Industrial Sewing Machine',
        description: 'We can provide support all kinds of industrial sewing machine.',
        img: "https://1.bp.blogspot.com/-GhcTm_P-IZk/X4rpGCq_XqI/AAAAAAAAoac/qCtj5dofCEMIN7ABa1TJvu5dWybrC39DACLcBGAsYHQ/s512/sewing-machine.png"
    },
    {
        title: 'Industrial Furniture',
        description: 'Our industrial world class furniture service is best fit for your industry.',
        img: "https://1.bp.blogspot.com/-9UXkKMKT9fA/X4rqCS0SVhI/AAAAAAAAoak/pszti8XYgDMgFWQGAnf90EF7STchSduAACLcBGAsYHQ/s512/office-chair.png"
    },
    {
        title: 'Garment Machinery',
        description: 'We provide complete garment machinery solutions.',
        img: "https://1.bp.blogspot.com/-UIgs1hZDTqQ/X4rqi5dK1GI/AAAAAAAAoas/KM1sBNT3NBYP85_06DPsYXuYL56AIW9WwCLcBGAsYHQ/s512/laundry.png"
    }
]

const OurService = () => {

    return (
        <section className="my-5 py-5">
        <div className="container service-container">
            <div className="mt-5">
                <h1 style={{textAlign: 'center'}}>Our <span style={{ color:'green'}}>services</span></h1>
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