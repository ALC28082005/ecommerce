
import './App.css';
import ProfileCard from "./components/ProfileCard";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import AlexaImg from "./components/img/alexa.png";
import CortanaImg from "./components/img/cortana.png";
import SiriImg from "./components/img/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda Arduino'}/>

      <div>   
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard titulo="Alexa" handle="@Alexa" img={AlexaImg} />
          </div>
          <div className="column is-4">
            <ProfileCard titulo="Cortana" handle="@Cortana" img={CortanaImg}/>
          </div>
          <div className="column is-4">
            <ProfileCard titulo="Siri" handle="@Siri" img={SiriImg}/>
          </div>
        </div>
      </div>
    </div>      
  </div>
      
    </div>
   
    
  );

}

export default App;
