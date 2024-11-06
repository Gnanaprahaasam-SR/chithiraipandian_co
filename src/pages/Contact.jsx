import contact from "../images/Contact-us.png";

const Contact = () => {
    return (
        <div className="contact overflow-hidden">
            <div className="row d-flex flex-sm-row-reverse align-items-center justify-content-center">
                <div className="col-md-6 col-12 d-flex justify-content-center">

                    <img src={contact} alt="contact" width="90%" />

                </div>
                <div className="col-md-6 col-12 px-5">
                    <div>
                        <h3 className='main-title text-center pb-3'>Contact Us</h3>
                        <p className="px-lg-5">If you have any questions, concerns, or need assistance with any of our services, please don't hesitate to contact us. We are here to help.</p>
                        <br />
                        <div className="text-center">
                            <a href="mailto:info@chithirapandian.com" className="text-decoration-none ">
                                <button className="email-us">E-Mail Us</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container py-4 ">
                <div className="row ">
                    <div className="d-flex align-items-center ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2173920250893!2d77.12195247353444!3d11.022309754613273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba855421a1c56a1%3A0x1b71bcc00e103da9!2sCHITHIRAI%20PANDIAN%20%26%20CO!5e0!3m2!1sen!2sin!4v1729327870865!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Contact;