import Play from 'assets/img/play.svg'
import './styles.css';

type Props = {
    name: string;
    classe: string;
}

function Button({ name, classe }: Props) {
    return (
        <a
            href={`${classe === "now" ? "https://www.netflix.com/br/title/60023642" : "https://www.youtube.com/watch?v=ByXuk9QqQkk"}`}
            className={`watch ${classe ? "now" : ""}`}
            role="button"
            target="_blank"
            rel="noreferrer"
        >
            <span>
                {classe.length > 0 &&
                    <img src={Play} alt="Play icon" />
                }
                {name}
            </span>
        </a>
    )
}

export default Button;