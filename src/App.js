import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [ repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: "AplicativoNOVO reactJS22",
      url: "http://github.com/PauloGonçalves",
      techs: ["nodejs, exprex.js"],
      likes: 0
    });

    const repositorie = response.data;

    setRepositories([...repositories, repositorie])
  }

  async function handleRemoveRepository(id) {
    const repositoriesModified = repositories.filter(repository => repository.id !== id )
    
    setRepositories(repositoriesModified)
  } 

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo =>  
        <li key={repo.id}>
          {repo.title}
          <button onClick={() => handleRemoveRepository(repo.id)} >
            Remover
          </button>
        </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
