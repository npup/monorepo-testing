import rc from "../assets/rc.png";

type CardProps = {
    text: string;
};
export function Card(props: CardProps) {
    const { text } = props;
    const wat = text.includes("A");
    function handleClick() {
        alert(wat ? "Fågel" : "Ingen fågel");
    }
    return (
        <button
            onClick={handleClick}
            style={{ display: "flex", alignItems: "center" }}
        >
            {text}
            {wat ? <img width="20" height="30" src={rc} alt="wat" /> : null}
        </button>
    );
}
