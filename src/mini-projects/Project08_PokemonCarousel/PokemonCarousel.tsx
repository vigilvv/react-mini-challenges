import { useEffect, useState } from "react";
import styles from "./PokemonCarousel.module.css";
import { fetchPokemon } from "./api";

type Pokemon = {
  id: number;
  name: string;
  imgUrl: string;
};

export default function PokemonCarousel() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleIncrementIndex = () => setId(id + 1);

  const handleDecrementIndex = () => setId(id > 1 ? id - 1 : id);

  const handleFetchPokemon = async (id: number, ignore: boolean) => {
    setLoading(true);
    setError(null);

    const { error, data } = await fetchPokemon(id);

    if (!ignore) {
      setError(error);
      setPokemon(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    let ignore = false; // For canceling useEffect if "id" changes

    handleFetchPokemon(id, ignore);

    return () => {
      ignore = true;
    };
  }, [id]);

  const LoadingComponent = <div>Loading...</div>;
  const ErrorComponent = <p>{error}</p>;
  const pokemonComponent = (
    <div>
      <img src={pokemon?.imgUrl} className={styles.pokemonImg} />
      <h5>
        {pokemon?.id}. {pokemon?.name}
      </h5>
    </div>
  );

  return (
    <div className={styles.displayDiv}>
      {loading
        ? LoadingComponent
        : error !== null
        ? ErrorComponent
        : pokemonComponent}
      <div>
        <button onClick={handleDecrementIndex}>Prev</button>
        <button onClick={handleIncrementIndex}>Next</button>
      </div>
    </div>
  );
}
