import { useRef, useEffect } from "react";

import "../css/ContactMe.css";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {

    const page = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".contactMe--text",
                {
                    transformOrigin: "left",
                    rotateZ: 10,
                    opacity: 0
                },
                {
                    rotateZ: 0,
                    opacity: 1,
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: page.current,
                        toggleActions: "play pause play reverse",
                        start: "-25% top",
                        // markers: true
                    }
                })
        }, page);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page--ctn" ref={page}>
            <div className="contactMe--ctn">
                <div className="contactMe--text">
                    <h1>Have a project?</h1>
                    <h1>I would love to get in touch with you</h1>
                </div>
                <form action="https://formsubmit.co/nitheeshraaja@gmail.com" method="POST" className="form">
                    <input type="email" name="email" placeholder="Your email"></input>
                    <input type="text" name="name" required placeholder="Your Name" />
                    <input type="text" name="message" required placeholder="Your message for me" />
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