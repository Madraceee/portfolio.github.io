import "../css/Home.css";

const Home = () => {
    return (
        <div className="page--ctn">
            <div className="home--ctn">
                <div className="home-animation"></div>
                <div className="home-info">
                    <div className="home-info--box">
                        <span className="name">I'm Nitheesh Raaja R</span>
                        <span className="info">A versatile Full Stack and Blockchain Developer</span>
                        <div className="home-links">
                            <a href="https://github.com/Madraceee" target="_blank"><img src="icons/github.svg" alt="Github" /></a>
                            <a href="https://linkedin.com/in/nitheeshraajar" target="_blank"><img src="/icons/linkedin.svg" alt="Linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;