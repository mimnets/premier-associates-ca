import React from 'react';
import Clients from '../Clients/Clients';


const clientsFeedback = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        title : 'California',
        img : "https://1.bp.blogspot.com/-OKypIklqFLA/X4iWWAtVOWI/AAAAAAAAoYo/OBDXySooRbo7rPe0mcrPCehrEGn6lIPGACLcBGAsYHQ/s192/customer-2.png"
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        title : 'California',
        img : "https://1.bp.blogspot.com/-3n43EPrmbz8/X4iWWL93gtI/AAAAAAAAoYk/JnyvqwRT3WgueNYbuvXnPlHzWx3mQz_fwCLcBGAsYHQ/s192/customer-1.png"
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        title : 'California',
        img : "https://1.bp.blogspot.com/-g3gZ3dglz48/X4iWWedh_iI/AAAAAAAAoYs/_JPsPqqYJ2Qnq1pk8EwFUtsGDkhsNZFtwCLcBGAsYHQ/s192/customer-3.png"
    }
]

const ClientsFeedback = () => {
    return (
       <section className="my-5 py-5">
           <div className="container">
           <div className="mt-5">
           <h1 style={{textAlign: 'center'}}>Clients <span style={{ color:'green'}}>Feedback</span></h1>
           </div>
           <div className="row mt-5">
           {
               clientsFeedback.map(cl => <Clients clientFeed={cl}></Clients>)
           }
           </div>
           </div>
       </section>
    );
};

export default ClientsFeedback;