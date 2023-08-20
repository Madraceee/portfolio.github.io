import { useEffect, useRef } from "react";
import "../css/Aboutme.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
    const page = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".aboutme--ctn", {
                rotateX: +90,
                translateY: "400px",
                translateZ: "500px",
                scrollTrigger: {
                    trigger: page.current,
                    start: "bottom bottom",
                    end: "130% 30%",
                    scrub: 1
                }
            });

            gsap.from(".aboutme-leftpane", {
                translateX: "-50%",
                delay: 0.5,
                duration: 1,
                scrollTrigger: {
                    trigger: page.current,
                    start: "top 70%",
                    toggleActions: "play pause play reverse",
                    //markers: true
                }
            })

        }, page);

        return () => ctx.revert();
    }, [])
    return (
        <div className="page--ctn" ref={page}>
            <div className="aboutme--ctn" >
                <div className="aboutme-leftpane">
                    <div className="aboutme-info">
                        <h1 className="heading">About Me</h1>
                        <span className="text">
                            I'm a Computer Science undergrad at SSN College Of Engineering with a passion to build new products.
                            I am deeply engrossed by the domains of Blockchain, DeFi and  Cloud computing.
                            My field of expertise includes Full Stack and Web3 development.
                            I'm all about making products, stacking up experience, and absorbing the priceless insights from industry veterans.
                            <br /><br />
                            I have a solid foundation in several programming languages, such as Javascript, Typescript, C++, Solidity and have built projects using them.
                            <br /><br />
                            Outside of my coding adventures, I enjoy playing football with my friends, cruising along on a drive, soaking in the scenery.
                        </span>
                    </div>
                </div>
                <div className="aboutme-rightpane">
                    <img src="/sketch.jpg" alt="Sketch" />
                </div>
            </div>
        </div>
    );
}

export default Aboutme;

