import React from 'react';
import './Contact.css'
import nodemailer from 'nodemailer';

const Contact = () => {
    return (
        <main className='row d-flex justify-content-between contact-container'>
            <div className="col-md-6" id="about">
                <h3>
                Some of our Clients
                </h3>
                <ul>
                    <li>Square Textiles Limited</li>
                    <li>Viyellatex Group</li>
                    <li>Snowtex Group</li>
                    <li>GMS Composite Knitting Ind. Ltd</li>
                    <li>Epyllion Group</li>
                    <li>Team Group</li>
                    <li>Thermax Group</li>
                    <li>Zehan knit composite</li>
                    <li>Chorka Fashions</li>
                    <li>Base Fashions Limited</li>
                    <li>IFS Textiles Limited</li>
                    <li>Mohammadi Group</li>
                    <li>Susuka Knit Limited</li>
                </ul>
            </div>
            <div className="col-md-6" id="contact">
                <h3>Our contact and mailing address</h3>
            
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
                <div>
                    <h3>After Sales and Service</h3>
                    <span>With ever changing business nature we change with our talented, dedicated team to provide our clients with the best possible combination of our product, spares & after sales service. </span>
                </div>
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