import "../css/CarousalCard.css";

type Props = {
    heading: string,
    summary: string,
    media: string,
    url: string,
};

const CarousalCard = ({ heading, summary, media, url }: Props) => {
    const display = summary;
    return (
        <div className="carousalCard" >
            <div className="gif-holder card-front">
                <img src={media} alt="Project-media" />
            </div>
            <div className="card-back">
                <h2 className="project-heading">{heading}</h2>
                <span className="project-summary">C# and JS assignment listen to events emitted by uniswap contract and display it.</span>
                <span className="project-link"><a href={url}>Link</a></span>
            </div>

        </div>
    );
}

export default CarousalCard;