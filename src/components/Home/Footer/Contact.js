import React from 'react';
import './Contact.css'
import nodemailer from 'nodemailer';

const Contact = () => {
    return (
        <main className='row d-flex justify-content-between contact-container'>
            <div className="col-md-6" id="about">
                <h3>
                About us
                </h3>
                <span>Premier Associates Ltd is on of the largest industrial machinary supplier of sewing, finishing, cutting, printing, embroidery, furniture, steel building construction, electric substation, generator, boiler, packaging & accessories machinery in Bangladesh. Order online for Yamato, Brother, Bullmer, Maica, Ve.Bi.Mac, Supreme and many other brands. Our brands and accessories : sewing spare parts, sewing machine service, plotters, CAD software, fusing machine, cutting machines, single needle, lockstitch, industrial washing machine, embroidery software, garment printing, automatic cutting, button stitch, button hole, jeans manufacturing, knitt stitching, sublimation, screen printing, garment finishing, needle detector, folders, wilcom, industrial spare parts, cutting machine parts, embroidery parts, hooks, bobbins, trimmers.</span>
            </div>
            <div className="col-md-6" id="contact">
                <h3>Get in touch with-</h3>
            
                <address>
                <strong>Premier Associates Ltd</strong><br/>
                 House # 54, Road # 1, Sector # 9,<br/> 
                 Uttara Model Town, Dhaka -1230, Bangladesh
                {/* <abbr title="Phone">P:</abbr> (123) 456-7890 */}
                </address>

                <address>
                <strong>Email</strong><br/>
                <a href="mailto:info@premierktbd.com">info@premierktbd.com</a>
                </address>
            {/* <form>
            <div>
            <input type="text" class="form-control" placeholder="Your email address"/>
            </div>
            <br/>
            <div>
            <input type="text" class="form-control" placeholder="Your name / company's name"/>
            </div>
            <br/>
            <div>
            <textarea type="textarea" style={{height:'200px'}} class="form-control" placeholder="Your message"/>
            <br/>
            <button className="btn btn-ca btn-md"><span style={{color:'white'}}>Send</span></button>
            </div>
            </form> */}
            </div>
        </main>
    );
};

export default Contact;