import contact from "../images/contact.jpg";

const Contact = () => {
    return (
        <div className="contact overflow-hidden">
            <div className="position-relative">
                <img src={contact} alt="contact" width="100%" className="contact_image" />
                <h1 className="contact_title text-white" >CONTACT US</h1>
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