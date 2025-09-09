const POKEMON_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(id: number) {
  try {
    const response = await fetch(`${POKEMON_BASE_URL}/${id}`);

    if (response.ok === true) {
      const data = await response.json();
      return {
        error: null,
        data: {
          id: data.id,
          name: data.name,
          imgUrl: data["sprites"]["other"]["official-artwork"]["front_shiny"],
        },
      };
    }

    throw new Error(`Error fetching pokemon #${id}`);
  } catch (e: unknown) {
    const error = e as Error;

    return {
      error: error.message,
      data: null,
    };
  }
}

// With AbortController support
export async function fetchPokemonWithAbort(id: number, options: RequestInit) {
  try {
    const response = await fetch(`${POKEMON_BASE_URL}/${id}`, options);

    if (response.ok === true) {
      return {
        error: null,
        data: await response.json(),
      };
    }

    throw new Error(`Error fetching pokemon #${id}`);
  } catch (e: unknown) {
    const error = e as Error;

    return {
      error: error.message,
      data: null,
    };
  }
}
