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
                            <a href="https://github.com/Madraceee" target="_blank"><img className="home-links-logo" src="icons/github.svg" alt="Github" /></a>
                            <a href="https://linkedin.com/in/nitheeshraajar" target="_blank"><img className="home-links-logo" src="/icons/linkedin.svg" alt="Linkedin" /></a>
                            <a href="mailto:nitheeshraaja@gmail.com"><img className="home-links-logo mail" src="/icons/mail.png" alt="Mail" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;