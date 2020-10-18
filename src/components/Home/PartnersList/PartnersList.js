import React from 'react';
import OurPartners from '../OurPartners/OurPartners';


const partnersList = [
    {
        description : 'Yamato Sewing Machine Mfg. Co., Ltd. Founded in 1927 to become a Japanese multinational sewing solution provider. One of the most respected brand in sewing solution providing cutting edge solutions to date.   ',
        name : 'Yamato',
        title : 'Yamato Sewing Machine',
        img : "https://1.bp.blogspot.com/-S1jksKhz7Tg/X4wSkhZTm5I/AAAAAAAAoc0/9Z0N7zPuzd4iSoq-NBDP8fN_pmC3zKVqQCLcBGAsYHQ/s420/yamato.png",
        link: ""
    },
    {
        description : 'Brother Industries, Ltd. is a Japanese multinational electronics and electrical equipment company headquartered in Nagoya, Japan. One of the market leaders in providing sewing solution. With their Nexio IoT solution they are leading the IoT solution provider.   ',
        name : 'Brother',
        title : 'Electronics, Electrical and Sewing Technology',
        img : "https://1.bp.blogspot.com/-4AB9f3OtQuo/X4wSg0X4f7I/AAAAAAAAocA/ReJuieanZjQyDOjPQhV3JS3uExAVd6xNQCLcBGAsYHQ/s300/Brother%2Bnew%2B1.png",
        link: ""
    },
    {
        description : 'Bullmer was founded in 1933. As a famous automatic cutting system supplier in the world, it enjoys the high reputation of  “Mercedes-Benz”in CAM industry. bullmer is one of the largest international suppliers of innovative laying and cutting machines. ',
        name : 'Bullmer',
        title : 'Cutting Machines',
        img : "https://1.bp.blogspot.com/-G6nle2q6JEA/X4wTqIbCcmI/AAAAAAAAodU/Q_OEEsjrp3kDC3zO82e4YVtm5km8fM4zACLcBGAsYHQ/s600/bullmer-gmbh-vector-logo.png",
        link: ""
    },
    {
        description : 'M.A.I.C.A. started working in the field of clothing industry machines 40 years ago. M.A.I.C.A. designs and realizes innovative and patented automatic sewing systems.',
        name : 'M.A.I.C.A',
        title : 'Cloting Machines',
        img : "https://1.bp.blogspot.com/-eTnQzwXLcHk/X4wSi5Okr-I/AAAAAAAAocQ/hpqy-6_QRT0BnN8Publ5lxoNQ2lGPkWSwCLcBGAsYHQ/s240/maica.png",
        link: ""
    }
    ,
    {
        description : 'VI.BE.MAC, the leading company in the industrial sewing machine area, specialized in shirt sewing machine & Denim jeans.',
        name : 'Vi.Be.Mac',
        title : 'Industrial Sewing Machine Manufacturer',
        img : "https://1.bp.blogspot.com/-aV9JA_ULJ2E/X4wSkG1VVAI/AAAAAAAAoco/LkGnkqqwoI0lKNIsDom-qC7-DgBKx7p2QCLcBGAsYHQ/s473/ve.vi%2Bmac.jpg",
        link: ""
    },
    {
        description : 'Founded in 1927, Miura has grown to become the largest industrial boiler manufacturer in the world. Efficiency, reliability, and safety are at the forefront of their design philosophy and manufacturing principles.',
        name : 'Miura',
        title : 'Industrial Boiler Manufacturer',
        img : "https://1.bp.blogspot.com/-HO0NsnvaIp8/X4rWTFsTrmI/AAAAAAAAoaM/SEj7TNCkfswMWM3nIQaGbRv_S5-3DhcjQCLcBGAsYHQ/s194/miura_new.png",
        link: ""
    },
    {
        description: "Founded in 1989, SINBON is a leading provider of integrated design and production services for electronic components. Our product applications include data acquisition, computer peripherals and other electronic products.",
        name: "SINBON",
        title: "Electronic Components Manufacturere",
        img:"https://1.bp.blogspot.com/-90WUFKYd9X4/X4wYWII9s8I/AAAAAAAAodk/pFToafthmYU0anlQ7KygHKlpQltIDnytACLcBGAsYHQ/s204/sinbon.png",
        link:""

    },
    {
        description:"Founded in 1973 to manufacture electric Busbar System and grown on to be a diversified company to product many products. EAE’s Busbar system is one of the best in the industry. Their solution is used in many industrial solutions and also in data center. ",
        name: "EAE Elektrik",
        title: "Electric Busbar System Manufacture",
        img:"https://1.bp.blogspot.com/-98xzM8KLOng/X4wSgyvNlnI/AAAAAAAAob8/k9afyMHpKToZpMNcgpfdbi9RwlvutKAiwCLcBGAsYHQ/s300/EAE.png",
        link:""
    },
    {
        description:"DAVIS is a pioneer in Cable Management System over the last 70 years and is world renowned for its underfloor trunking system. DAVIS is also one of the world’s premier manufacturers of efficient Power Distribution System. Its busways are robust in design, compact in construction and distinctive in its revolutionary epoxy insulation.",
        name:"Davis",
        title:"Cable Management System",
        img:"https://1.bp.blogspot.com/-0-5KKX42Ac8/X4wSg7-vAnI/AAAAAAAAob4/ACRDFfJx9UoH_74hAVq811gjkXNErOwTQCLcBGAsYHQ/s266/Davis.jpg",
        link:""
    },
    {
        description:"The VEIT Group with its head office in Landsberg, Germany, is worldwide the leading manufacturer of ironing equipment, fusing machines, pressing machines as well as refinishing equipment for garments. They have been in the business for more than 60 years.",
        name:"Veit",
        title:"Garments Equipment Manufacturer",
        img:"https://1.bp.blogspot.com/-gCCBxzQU1fA/X4rWTKHfuuI/AAAAAAAAoaI/V1l3-FTxnh4D0yZTwCktIAZ2mhkA-lUXgCLcBGAsYHQ/s225/veit_new.png",
        link:""
    },
    {
        description:"Founded in December 2006, Ningbo Supreme Electronic Machinery Inc. is a world renowned award winning Technology Company that engages in the development, production, sales and service of automatic sewing machines, and other automation solutions.",
        name:"Supreme",
        title:"Automatic Sewing Machines",
        img:"https://1.bp.blogspot.com/-yQnuwUE2PI4/X4wSiE2eqwI/AAAAAAAAocE/Jt5JfNtHyLkPSkPIA7-RBiW4fmols_OZACLcBGAsYHQ/s325/Supreme.jpg",
        link:""
    },
    {
        description:"MCS SpA leads a mechano-textile group that started operating in the early sixties. It is one of the most respected brand in Dying and Finishing Machinery.",
        name:"MCS",
        title:"Dying and Finishing Machinery",
        img:"https://1.bp.blogspot.com/-bZuAiCqjODY/X4wSjBYRURI/AAAAAAAAocU/xN-M4W5VvuMFPZ7DwqqBhJ_eKX3O1tdpQCLcBGAsYHQ/s284/mcs%2Bdying.png",
        link:""
    },
    {
        description:"Dpack is a packing innovation company which is involved in simple packaging to custom packaging solution.",
        name:"Dpack",
        title:"Custom Packaging Solution",
        img:"https://1.bp.blogspot.com/-CBWi8Fra5h8/X4wSiR_xbwI/AAAAAAAAocI/afNlUSgLYGcMjw8Cs9VdLvbbILR_6lKfQCLcBGAsYHQ/s265/dpack.jpg",
        link:""
    },
    {
        description:"Unitech is a textile machinery company specialized in stenter machine and other highly specialized finishing machine.",
        name:"Unitech",
        title:"Textile Machinery Company",
        img:"https://1.bp.blogspot.com/-csuqkB-D09g/X4woftQwXeI/AAAAAAAAod8/_N69soFXwyofBPtKh2Bum-JMurSiRHqJACLcBGAsYHQ/s0/logo-unitech-industries-newlogo-chiaro.png",
        link:""
    },
    {
        description:"Perkins Engines Company Limited, a subsidiary of Caterpillar Inc, is primarily a diesel engine manufacturer. It was established in Peterborough, England, in 1932. Over the years Perkins has expanded its engine ranges and produces thousands of different engine specifications including diesel and petrol engines.",
        name:"Perkins",
        title:"Perkins Engines Company",
        img:"https://1.bp.blogspot.com/-Jz0HXrpfcV8/X4wSjftdXDI/AAAAAAAAocc/uFYL1vUs4qEuG5FaUA_KInCg3leDQo-nwCLcBGAsYHQ/s266/perkins.png",
        link:""
    },
    {
        description:"TIANJIN RICHPEACE AI CO., LIMITED was established in 2006 and has started into operation since 2007. Its product range is spreader across Sewing Machine, Embroidery Machine, Laser Cutting Machine and many more.",
        name:"RICHPEACE",
        title:"Laser Cutting Machine",
        img:"https://1.bp.blogspot.com/-QeLiYuIdk4k/X4wSjz51EQI/AAAAAAAAocg/EQmHLY71ioMYwfQjm3sDEsWalaazv9_dwCLcBGAsYHQ/s225/richpeace.png",
        link:""
    },
    {
        description:"Winda Technology Limited is a high-technology company in the textile and apparel industry, specializing in develop innovative garment CAD/CAM/ERP System.",
        name:"Winda",
        title:"Innovative Garment CAD/CAM/ERP System",
        img:"https://1.bp.blogspot.com/-Ru_PaJjsC8E/X4wSkcEZT0I/AAAAAAAAocw/W65wsvHHrWIkUV72pQQ10a6_NAt0DmotQCLcBGAsYHQ/s465/winda.jpg",
        link:""
    },
    {
        description:"Focus Garment Tech Pte Ltd is one of the subsidiary companies of Chu Cheong Co Pte Ltd. Focus Garment Tech Pte Ltd deals in all kinds of industrial sewing machines and garment equipment from cutting, sewing to finishing section (One-Stop Solution).",
        name:"Focus",
        title:"Garment Equipment for Cutting",
        img:"https://1.bp.blogspot.com/-hzSyvlGJjf8/X4wSicTTZzI/AAAAAAAAocM/LiFZRW4AKf8XeqnDwkowE3P_HXlvewXewCLcBGAsYHQ/s335/focus.png",
        link:""
    }
]

const PartnersList = () => {
    return (
       <section className="my-5 py-5" id="partners">
           <div className="container">
           <div className="mt-5">
           <h1 style={{textAlign: 'center'}}>Our <span style={{ color:'green'}}>Partners</span></h1>
           </div>
           <div className="row mt-5">
           {
               partnersList.map(cl => <OurPartners clientFeed={cl}></OurPartners>)
           }
           </div>
           </div>
       </section>
    );
};

export default PartnersList;