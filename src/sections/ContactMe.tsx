import "../css/ContactMe.css";
import Footer from "../components/Footer";

const ContactMe = () => {
    return (
        <div className="page--ctn">
            <div className="contactMe--ctn">
                <form action="https://formsubmit.co/nitheeshraaja@email.com" method="POST" className="form">
                    <h1>Contact Me</h1>
                    <input type="email" name="email" placeholder="Email Your Address"></input>
                    <input type="text" name="name" required placeholder="Email Your Name" />
                    <input type="text" name="message" required placeholder="Email Your for Message" />
                    <input type="hidden" name="_subject" value="New message from website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ContactMe