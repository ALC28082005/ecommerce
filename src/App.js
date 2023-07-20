
import './App.css';
import ProfileCard from "./components/ProfileCard";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import PlacaImg from "./components/img/PlacaArduino.png";
import SensorMovImg from "./components/img/sensor_de_movimiento.png";
import ModuloRelayImg from "./components/img/modulo-relay-1-canal.png";
import ItemCount from './components/ItemCount/ItemCount';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a nuestra tienda Arduino'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada', quantity)}/>

      <div>   
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard titulo="Placa Arduino" handle="@Placa" img={PlacaImg} />
          </div>
          <div className="column is-4">
            <ProfileCard titulo="Sensor de movimiento" handle="@Sensor" img={SensorMovImg}/>
          </div>
          <div className="column is-4">
            <ProfileCard titulo="Modulo relay 1 canal" handle="@Actuador" img={ModuloRelayImg}/>
          </div>
        </div>
      </div>
    </div>      

  </div>
      
    </div>
   
    
  );

}

export default App;
