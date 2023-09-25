import Navbar from 'components/Navbar';
import Button from 'components/Button';
import MainImage from 'assets/img/ilustracao.png';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <div className="main-container">
          <div className="main-content">
            <div>
              <h3>Hayao Miyazaki</h3>
            </div>

            <div>
              <h1>A Viagem de Chihiro</h1>
            </div>

            <div>
              <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
            </div>

            <div className="group-buttons">
              <Button name="assista agora" classe="now" />
              <Button name="assista o trailer" classe=""/>
            </div>
          </div>

          <div className="main-image">
            <img src={MainImage} alt="Chihiro" />
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
