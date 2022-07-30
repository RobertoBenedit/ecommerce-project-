import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box"></div>
                <div className="box-indo">
                    <div className="info-image">
                        <i className="fas fa-phone-alt"></i>
                    </div>
                    <h5>Call Us 24x7</h5>
                    <p>012 345 6789</p>
                </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
                <div box-info>
                    <div className="info-image">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5>Headquarter</h5>
                    <p>Roberto Benedit</p>
                </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
                <div box-info>
                    <div className="info-image">
                        <i className="fas fa-fax"></i>
                    </div>
                    <h5>Fax</h5>
                    <p>012 345 6789</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
