import { useEffect, useRef, useState } from "react";

import "../css/Skills.css";
import Key from "../components/Key";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const page = useRef<HTMLDivElement>(null);
    const [topic, setTopic] = useState<string>("Skills");

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".keyboard", {
                rotateX: +90,
                translateZ: "300px",
                scrollTrigger: {
                    trigger: page.current,
                    start: "top 70%",
                    end: "bottom bottom",
                    scrub: 1,
                    //markers: true
                }
            })
        }, page)

        return () => ctx.revert();
    }, [])

    return (
        <div className="page--ctn" ref={page}>
            <div className="skills--ctn" >
                <div className="keyboard">
                    <div className="row row-1">
                        <div>
                            <Key type={"Text"} value="Esc" callback={() => setTopic("Skills")} />
                            <Key type={"Text"} value="Skills" />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="Pause" notVisible={true} />
                            <Key type={"Text"} value="Delete" notVisible={true} />
                        </div>
                    </div>

                    <div className="row row-2">
                        <Key type={"Text"} value="Tab" notVisible={true} />
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Image"} value="/icons/python_logo.svg" url="https://www.python.org/" notVisible={!(topic === "Languages")} />
                        </div>
                        <div>
                            <Key type={"Text"} value="Languages" callback={() => setTopic("Languages")} />
                            <Key type={"Image"} value="/icons/cpp_logo.svg" url="https://isocpp.org/" notVisible={!(topic === "Languages")} />
                            <Key type={"Image"} value="/icons/JS_logo.png" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" notVisible={!(topic === "Languages")} />
                            <Key type={"Image"} value="/icons/TS_logo.png" url="https://www.typescriptlang.org/" notVisible={!(topic === "Languages")} />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="<--------" notVisible={true} />
                        </div>
                    </div>

                    <div className="row row-3">
                        <Key type={"Text"} value="Caps" notVisible={true} />
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Image"} value="/icons/java_logo.svg" url="https://www.java.com/en/" notVisible={!(topic === "Languages")} />
                        </div>
                        <div>
                            <Key type={"Image"} value="/icons/html_logo.svg" url="https://www.w3.org/html/" notVisible={!(topic === "Languages")} />
                            <Key type={"Image"} value="/icons/css_logo.svg" url="https://www.w3schools.com/css/" notVisible={!(topic === "Languages")} />
                            <Key type={"Image"} value="/icons/solidity_logo.png" url="https://docs.soliditylang.org/en/v0.8.21/" notVisible={!(topic === "Languages")} />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                        </div>

                        <div>
                            <Key type={"Image"} value="/icons/nextjs_logo.svg" url="https://nextjs.org/" notVisible={!(topic === "Frameworks")} />
                            <Key type={"Image"} value="/icons/nodejs_logo.svg" url="https://nodejs.org/" notVisible={!(topic === "Frameworks")} />
                            <Key type={"Image"} value="/icons/reduxjs_logo.svg" url="https://redux.js.org/" notVisible={!(topic === "Frameworks")} />
                        </div>
                    </div>


                    <div className="row row-4">
                        <Key type={"Text"} value="Shift" notVisible={true} />
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                        </div>
                        <div>
                            <Key type={"Image"} value="/icons/mysql_logo.svg" url="https://www.mysql.com/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/mongodb_logo.svg" url="https://www.mongodb.com/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/postman_logo.svg" url="https://postman.com/" notVisible={!(topic === "Tools")} />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                        </div>
                        <div>
                            <Key type={"Image"} value="/icons/reactjs_logo.svg" url="https://reactjs.org/" notVisible={!(topic === "Frameworks")} />
                            <Key type={"Text"} value="Frameworks" callback={() => setTopic("Frameworks")} />
                        </div>
                    </div>

                    <div className="row row-5">
                        <Key type={"Text"} value="CTRL" notVisible={true} />
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />

                        </div>
                        <div>
                            <Key type={"Image"} value="/icons/git_logo.svg" url="https://git-scm.com/" notVisible={!(topic === "Tools")} />
                            <Key type={"Text"} value="Tools" callback={() => setTopic("Tools")} />
                            <Key type={"Image"} value="/icons/bash_logo.png" url="https://www.gnu.org/software/bash/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/chartjs_logo.svg" url="https://www.chartjs.org/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/docker.svg" url="https://www.docker.com/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/tailwind_logo.svg" url="https://tailwindcss.com/" notVisible={!(topic === "Tools")} />
                            <Key type={"Image"} value="/icons/puppeteer_logo.svg" url="https://github.com/puppeteer/puppeteer" notVisible={!(topic === "Tools")} />
                        </div>
                        <div>
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Text"} value="" />
                            <Key type={"Image"} value="/icons/expressjs_logo.svg" url="https://expressjs.com/" notVisible={!(topic === "Frameworks")} />
                        </div>
                        <div>
                            <Key type={"Image"} value="/icons/hardhat_logo.png" url="https://hardhat.org/" notVisible={!(topic === "Frameworks")} />
                            <Key type={"Image"} value="/icons/foundry_logo.png" url="https://book.getfoundry.sh/" notVisible={!(topic === "Frameworks")} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default Skills;