import React from 'react';
import OurPartner from '../OurPartner/OurPartner';


const brandInfo = [
    {
        img: "https://1.bp.blogspot.com/-CByQvoLT76Y/X4rU3BHrVQI/AAAAAAAAoZc/YMYer2nNaCwu_y3C9eIrdU946oNr7_cfACLcBGAsYHQ/s193/yamato.png",
        link: "https://www.yamato-sewing.com/en/"
    },
    {
        img: "https://1.bp.blogspot.com/-3onVhLbbA9o/X4rU2En3ZMI/AAAAAAAAoZQ/jzrH0hblUv4pVNQkStJ0BRaC4z4vkyfsgCLcBGAsYHQ/s1974/brother_logo.png",
        link: "https://industrialsewingmachine.global.brother/en-ap/index.aspx"
    },
    {
        img: "https://1.bp.blogspot.com/-aU5Kj6F7fBg/X4rU9JQYG9I/AAAAAAAAoZk/1w7CrWhBnucbmn9-rUYmuobuXzfkiM4rACLcBGAsYHQ/s600/bullmer-gmbh-vector-logo.png",
        link: "https://www.bullmer.de/en/"
    },
    {
        img: "https://1.bp.blogspot.com/-gCCBxzQU1fA/X4rWTKHfuuI/AAAAAAAAoaI/V1l3-FTxnh4D0yZTwCktIAZ2mhkA-lUXgCLcBGAsYHQ/s225/veit_new.png",
        link: "https://www.veit.de/en/"
    },
    {
        img: "https://1.bp.blogspot.com/-HO0NsnvaIp8/X4rWTFsTrmI/AAAAAAAAoaM/SEj7TNCkfswMWM3nIQaGbRv_S5-3DhcjQCLcBGAsYHQ/s194/miura_new.png",
        link: "https://www.miuraz.co.jp/en/"
    }
    ,
    {
        img: "https://1.bp.blogspot.com/-BFnbmUa0gMI/X4rU9CpgxuI/AAAAAAAAoZg/A0fGr49o82UmxZJcGxL5W88rMR87qEvBQCLcBGAsYHQ/s240/mica-logo2.png",
        link: "https://www.maicaitalia.com/en/product/mcd/"
    }
]

const PartnerInfo = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
            <div className="mt-5">
            <h1 style={{textAlign: 'center'}}>Our <span style={{color: 'green'}}>Partners</span></h1>
            </div>
            <div className="row mt-5">
                {
                    brandInfo.map(info => <OurPartner brand={info}></OurPartner>)
                }
            </div>
            </div>
            
        </section>
    );
};

export default PartnerInfo;