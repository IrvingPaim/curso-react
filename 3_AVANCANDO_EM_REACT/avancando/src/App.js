import { useState } from 'react';
import './App.css';

import City from "./assets/city.jpg"
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  //const name = "Irving"

  const [userName] = useState("Irving Paim")

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
      <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* loop em array de objetos */}
      {cars.map(({brand, color, km, newCar}) => (
      <CarDetails 
        brand={brand} 
        color={color} 
        km={km} 
        newCar={newCar}
        />
        ))}
        {/* Fragment */}
        <Fragment propFragment="teste"/>
        {/* children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
    </div>
  );
}

export default App;
