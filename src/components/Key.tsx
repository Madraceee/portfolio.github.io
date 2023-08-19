import "../css/Key.css"

type Props = {
    value: string,
    notVisible?: boolean,
    callback?: () => void
} & (
        {
            type: "Image",
            url: string
        } | {
            type: "Text"
        })

const Key = (props: Props) => {
    return (
        <div className="key" onClick={props.callback} style={{ color: props.value === "Skills" ? "var(--font-color-heading)" : "inherit" }}>
            <div className="key-border" >
                {props.type === 'Image' ?
                    (<a href={props.url} target="_blank" style={{ opacity: props.notVisible ? 0 : 1 }} className="img--ctn"><img src={props.value} alt="Key" className="key-img" /></a>) :
                    (<span className="key-text" style={{ opacity: props.notVisible ? 0 : 1 }}>{props.value}</span>)
                }
            </div>
        </div>
    );
}


export default Key;
