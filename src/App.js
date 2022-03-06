import api from './services/api';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    api.get('?limit=100')
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">

      <Navbar />

      <div>
        {pokemons.map((pok, key) => (

          <div key={key} className="card card-medium card-small">
            <Card name={pok.name} url={pok.url} />
          </div>
        )
        )}

      </div>

    </div>



  );
}

export default App;
