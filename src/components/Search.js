import React from 'react'

import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Aquí iría el código para hacer la petición a la API con fetch o axios
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // Debounce para evitar hacer múltiples peticiones en poco tiempo
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Buscar</button>
      {/* Aquí iría el código para mostrar los resultados */}
    </div>
  );
};

export default Search;
