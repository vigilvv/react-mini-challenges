// Mostly same as "PokemonCarousel.ts", but this has support for AbortController

import { useEffect, useState } from "react";
import styles from "./PokemonCarousel.module.css";
import { fetchPokemonWithAbort } from "./api";

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

export default function PokemonCarouselWithAbort() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleIncrementIndex = () => setId(id + 1);

  const handleDecrementIndex = () => setId(id > 1 ? id - 1 : id);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const { error, data } = await fetchPokemonWithAbort(id, { signal });

        setError(error);
        setPokemon({
          id: data.id,
          name: data.name,
          imgUrl: data["sprites"]["other"]["official-artwork"]["front_shiny"],
        });
      } catch (e) {
        const err = e as Error;
        if (err.name === "AbortError") {
          // Request aborted - silently ignore
          return;
        }
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    handleFetchPokemon();

    return () => {
      controller.abort();
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
