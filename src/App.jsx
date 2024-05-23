import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (name.trim().length < 3 || name.trim() !== name || pokemon.trim().length < 6) {
      setError('Por favor revisa la información ingresada.');
      return;
    }

    setCardData({ name, pokemon });
    setError('');
  };

  return (
    <div>
      <h1>Carga de Pokemónes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span className="input-label">Ingresa tu nombre:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <span className="input-label">Ingresa tu pokemón favorito:</span>
          <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cardData && (
        <div>
          <h2>Información del Entrenador Pokemón</h2>
          <p>Nombre: {cardData.name}</p>
          <p>Pokemón favorito: {cardData.pokemon}</p>
        </div>
      )}
    </div>
  );
}

export default App;
