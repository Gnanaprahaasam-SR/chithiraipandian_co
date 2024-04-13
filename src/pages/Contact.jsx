import contact from "../images/contact.jpg";

const Contact = () => {
    return (
        <div className="contact overflow-hidden">
            <div className="position-relative">
                <img src={contact} alt="contact"  className="contact_image" />
                <h1 className="contact_title" >CONTACT US</h1>
            </div>

            <div className="container py-4 ">
                <div className="row gy-3">
                    <div className="col-xs-12 col-sm-12 col-md-7">
                        <div className="d-flex align-items-center ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31329.467545940173!2d77.10466826249298!3d11.024859378973844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.14%2F6M%2C%20Hospital%20Road%2C%20Sulur%2C%20Coimbatore%20-641%20402.!5e0!3m2!1sen!2sin!4v1712843910849!5m2!1sen!2sin" width="800" height="600" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 ">
                        <form className="d-flex align-items-center row px-4" >
                            <div className=" border mb-3" style={{ backgroundColor: "#072F55" }}>
                                <h2 className=" p-3 text-center text-white" >We Would Love To Talk About Your Business!</h2>
                            </div>
                            <input type="text" placeholder="Full Name" className="contact_input mb-3" />

                            <input type="email" placeholder="Email" className="contact_input mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="please fill out this field" />

                            <input type="tel" placeholder="Phone" className="contact_input mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="only number and phone characters (#,*,_)are accepted" />

                            <input type="text" placeholder="Subject" className="contact_input mb-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="please fill out this field" />

                            <textarea name="message" id="message" cols="5" rows="4" className="contact_input mb-3" placeholder="Message"></textarea>

                            <button type="button " className="btn " style={{ backgroundColor: "#072F55", color: "white", fontSize: "20px" }}> Send </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Contact;