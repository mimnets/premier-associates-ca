import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import slack from '../../../images/logos/slack.png'
import OurPartner from '../OurPartner/OurPartner';

const brandInfo = [
    {
        img: {airbnb}
    },
    {
        img: {google}
    },
    {
        img: {uber}
    },
    {
        img: {slack}
    }
]

const PartnerInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    brandInfo.map(info => <OurPartner brand={info}></OurPartner>)
                }
            </div>
        </section>
    );
};

export default PartnerInfo;