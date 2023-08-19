import { useRef, useEffect } from "react";

import CarousalCard from "../components/CarousalCard";
import "../css/Projects.css";
import projects from "../data/projects.json"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

const Projects = () => {

    const carousal = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const heading = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Heading animation
            gsap.to(".heading", {
                duration: 1.5,
                text: "My Projects",
                scrollTrigger: {
                    trigger: slider.current,
                    toggleActions: "play complete complete reverse",
                    start: "top center",
                    // markers: true
                }

            })

            // Horizontal Scroll
            let panels = gsap.utils.toArray(".carousalCard");
            let end = 2000;
            if (carousal.current?.offsetWidth)
                end = 6 * carousal.current?.offsetWidth
            gsap.fromTo(panels,
                {
                    x: `${carousal.current?.offsetWidth}`,
                },
                {
                    xPercent: -150 * (panels.length + 1),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: slider.current,
                        toggleActions: "restart pause reverse none",
                        start: "top top",
                        pin: true,
                        //snap: 1 / (panels.length - 1),
                        end: `+=${end}`,
                        scrub: true,
                        // markers: true,
                    }
                }
            )
        }, slider);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page--ctn" id="gsap-animation-start" ref={slider}>
            <div className="projects--ctn"  >
                <h1 className="heading" ref={heading}></h1>
                <div className="carousal" ref={carousal}>
                    {projects.map((project, id) => (
                        <CarousalCard heading={project.heading} summary={project.summary} media={project.media} url={project.url} key={id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
