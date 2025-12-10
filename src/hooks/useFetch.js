import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjZiMDM3MDBhMmM3YmVkNWVkMjI1YTZkMjY4NjY1NyIsIm5iZiI6MTc2NDc4MzU3OC4xMDcsInN1YiI6IjY5MzA3NWRhYmZmOTAxYzhjYzA3ZmFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G3XYHQfR_GOE_khUNgILnanEpYA_1_J7LtHLYTAWVgE`,
  },
};

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {

      try {
        
        const resposta = await fetch(url, options).then((resposta) => resposta.json());
        setDados(resposta);

      } catch (error) {
        console.log("Erro ao buscar dados: ", error);
      }

    };

    buscarDados();
  }, [url]);

  return { dados };
};