import React from 'react';

const Footer = () => {
    return (
        <main className='row d-flex justify-content-center my-5 ty-5'>
            <div className="col-md-4">
                <h2>
                Let us handle your project, professionally.
                </h2>
                <span>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</span>
            </div>
            <div className="col-md-6">
            <form>
            <div>
                <input type="text" class="form-control" placeholder="Your email address"/>
            </div>
            <div>
            <input type="text" class="form-control" placeholder="Your name / company's name"/>
            </div>
            <div>
            <textarea type="textarea" class="form-control" placeholder="Your message"/>
            </div>
            <button className="btn btn-primary">Send</button>
            </form>
            </div>
        </main>
    );
};

export default Footer;