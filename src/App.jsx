import { useState, useEffect } from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';

const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZiMDM3MDBhMmM3YmVkNWVkMjI1YTZkMjY4NjY1NyIsIm5iZiI6MTc2NDc4MzU3OC4xMDcsInN1YiI6IjY5MzA3NWRhYmZmOTAxYzhjYzA3ZmFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G3XYHQfR_GOE_khUNgILnanEpYA_1_J7LtHLYTAWVgE'
  }
};

const URL_FETCH = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";

const App = () => {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const buscarFilmes = async () => {

      try {
        
        const dados = await fetch(URL_FETCH, options).then((resposta) => resposta.json());
        setFilmes(dados.results);
        
      } catch (error) {
        console.log("Erro ao buscar filmes: ", error);
      }

    };

    buscarFilmes();
  }, []);

  return (
    <>
      <NavBar />

      <main>
        <div className="container">

          <h2 className="title">Filmes Populares:</h2>

          <div className="movies-container">
            {filmes.map((filme) => (
              <Card key={filme.id} filme={filme} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;