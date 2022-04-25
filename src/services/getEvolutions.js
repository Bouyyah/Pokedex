import axios from "axios";
import { getPokemon } from "./getPokemon";

export const getEvolutions = async (url) => {
  let evos = [];

  await axios.get(url).then(async (response) => {
    const evo = response.data;
    await getPokemon(evo.chain.species.name).then((res) => evos.push(res));

    if (evo.chain && evo.chain.evolves_to.length > 0) {
      await getPokemon(evo.chain.evolves_to[0].species.name).then((res) =>
        evos.push(res)
      );
    }
    if (
      evo.chain.evolves_to[0] &&
      evo.chain.evolves_to[0].evolves_to.length > 0
    ) {
      await getPokemon(evo.chain.evolves_to[0].evolves_to[0].species.name).then(
        (res) => evos.push(res)
      );
    }
  });

  return evos;
};
