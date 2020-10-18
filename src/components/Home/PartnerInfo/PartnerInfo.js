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
    },
    {
        img:"https://1.bp.blogspot.com/-aV9JA_ULJ2E/X4wSkG1VVAI/AAAAAAAAoco/LkGnkqqwoI0lKNIsDom-qC7-DgBKx7p2QCLcBGAsYHQ/s473/ve.vi%2Bmac.jpg",
        link:"https://www.vibemac.com/en"
    }
    ,
    {
        img:"https://1.bp.blogspot.com/-98xzM8KLOng/X4wSgyvNlnI/AAAAAAAAob8/k9afyMHpKToZpMNcgpfdbi9RwlvutKAiwCLcBGAsYHQ/s300/EAE.png",
        link:"https://www.eae.com.tr/EN/busbar-general-information.html"
    },
    {
        img:"https://1.bp.blogspot.com/-yQnuwUE2PI4/X4wSiE2eqwI/AAAAAAAAocE/Jt5JfNtHyLkPSkPIA7-RBiW4fmols_OZACLcBGAsYHQ/s325/Supreme.jpg",
        link:"http://www.china-supreme.com/en/"
    },
    {
        img:"https://1.bp.blogspot.com/-Ru_PaJjsC8E/X4wSkcEZT0I/AAAAAAAAocw/W65wsvHHrWIkUV72pQQ10a6_NAt0DmotQCLcBGAsYHQ/s465/winda.jpg",
        link:"http://www.windacadcam.com/"
    },
    {
        img:"https://1.bp.blogspot.com/-Jz0HXrpfcV8/X4wSjftdXDI/AAAAAAAAocc/uFYL1vUs4qEuG5FaUA_KInCg3leDQo-nwCLcBGAsYHQ/s266/perkins.png",
        link:"https://www.perkins.com/"
    },
    {
        img:"https://1.bp.blogspot.com/-csuqkB-D09g/X4woftQwXeI/AAAAAAAAod8/_N69soFXwyofBPtKh2Bum-JMurSiRHqJACLcBGAsYHQ/s0/logo-unitech-industries-newlogo-chiaro.png",
        link:"https://www.unitech.it/"
    }
]

const PartnerInfo = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
            <div className="mt-5">
            <h1 style={{textAlign: 'center'}}>Our <span style={{color: 'green'}}>Brands</span></h1>
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