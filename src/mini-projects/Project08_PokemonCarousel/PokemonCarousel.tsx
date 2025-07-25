import { useEffect, useState } from "react";
import styles from "./PokemonCarousel.module.css";
import { fetchPokemon } from "./api";

type Pokemon = {
  id: number;
  name: string;
  imgUrl: string;
  // sprites: {
  //   other: {
  //     "official-artwork": {
  //       front_shiny: string;
  //     };
  //   };
  // };
};

export default function PokemonCarousel() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleIncrementIndex = () => setId(id + 1);

  const handleDecrementIndex = () => setId(id > 1 ? id - 1 : id);

  useEffect(() => {
    let ignore = false;
    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      const { error, data } = await fetchPokemon(id);

      if (!ignore) {
        setError(error);
        setPokemon({
          id: data.id,
          name: data.name,
          imgUrl: data["sprites"]["other"]["official-artwork"]["front_shiny"],
        });
      }

      // if (error) {
      //   setError(error);
      // } else {
      //   setPokemon(data);
      // }

      setLoading(false);
    };

    handleFetchPokemon();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div className={styles.displayDiv}>
      {loading ? (
        <div>Loading...</div>
      ) : error !== null ? (
        <p>{error}</p>
      ) : (
        <div>
          <img src={pokemon?.imgUrl} className={styles.pokemonImg} />
          <h5>
            {pokemon?.id}. {pokemon?.name}
          </h5>
        </div>
      )}
      <div>
        <button onClick={handleDecrementIndex}>Prev</button>
        <button onClick={handleIncrementIndex}>Next</button>
      </div>
    </div>
  );
}
