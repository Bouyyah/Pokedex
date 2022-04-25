import axios from "axios";

export async function getAllPokemonsName(offset, limit) {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  let names = [];
  await axios
    .get(pokeUrl)
    .then((res) => res.data.results.map((pokemon) => names.push(pokemon.name)));

  return names;
}
