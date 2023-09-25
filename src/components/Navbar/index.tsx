import Logo from 'assets/img/logo2.svg';
import Facebook from 'assets/img/facebook.svg';
import Instagram from 'assets/img/instagram.svg';
import Twitter from 'assets/img/twitter.svg';
import Youtube from 'assets/img/youtube.svg';

import './styles.css';

function Navbar() {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <img src={Logo} alt="Studio Ghibli" />
                </div>

                <div className="social-media-icons">
                    <a href="https://pt-br.facebook.com/StudioGhibliBrasil/" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/ghiblibrasil/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/ghibliusa" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=SgZI655GgHk" target="_blank" rel="noreferrer">
                        <img src={Youtube} alt="Youtube" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;