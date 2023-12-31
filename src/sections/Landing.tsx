import { useEffect, useState, useRef } from "react";

import "../css/Landing.css";

import { gsap } from "gsap";





const Landing = () => {

    const page = useRef<HTMLDivElement>(null);

    const activities: string[] = ["Building", "Coding", "Tinkering"];

    const [direction, setDirection] = useState<string>("right");
    const [displayText, setDisplayText] = useState<string>("");
    const [index, setIndex] = useState<number>(-1);
    const [wordIndex, setWordIndex] = useState<number>(0);


    // Text animation
    useEffect(() => {
        if (direction === "right" && index <= activities[wordIndex].length) {
            setTimeout(() => {
                setIndex((index) => index + 1);
                setDisplayText(activities[wordIndex].substring(0, index));
            }, 200);
        }

        if (direction === "left" && index >= 0) {
            setTimeout(() => {
                setIndex((index) => index - 1);
                setDisplayText(activities[wordIndex].substring(0, index));
            }, 150);
        }

        if (direction === "left" && index === -1 && wordIndex + 1 < activities.length) {
            setDirection("right");
            setWordIndex((index) => index + 1);
            setIndex(0);
        }

        if (direction === "right" && index === activities[wordIndex].length) {
            setDirection("left");
        }
    }, [index]);

    useEffect(() => {
        //Ending Animation
        let ctx = gsap.context(() => {
            const runEndingAnimation = () => {
                gsap.to(".landing-page--ctn", {
                    translateY: "-100%",
                    duration: 2
                });
                gsap.to(".landing-page--text", {
                    opacity: 0,
                    duration: 2,
                })
            }

            if (direction === "left" && wordIndex === 2 && index === -1)
                runEndingAnimation();
        }, page)



        return () => ctx.revert();

    }, [index]);


    return (
        <div className="page--ctn" ref={page}>
            <div className="landing-page--ctn">
                {/* Add bg animation */}
                <span className="landing-page--text">{displayText}</span>
            </div>
        </div>
    );
}


export default Landing;