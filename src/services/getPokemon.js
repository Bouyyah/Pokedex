import axios from "axios";

const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon(pokeName, all = false) {
  const pokeUrl = mainUrl + pokeName;
  let pokemon = {
    id: 0,
    name: "",
    types: [],
    image: "",
    bio: {
      description: "",
      shape: "",
      height: "",
      weight: "",
      abilities: [],
      habitat: "",
    },
    training: {
      base_exp: 0,
      base_happiness: 0,
      catch_rate: 0,
      growth_rate: "",
    },
    evolution: undefined,
    stats: {
      hp: 0,
      atk: 0,
      def: 0,
      sp_atk: 0,
      sp_def: 0,
      speed: 0,
    },
  };

  let pokemonDetailsRes = await axios.get(pokeUrl);
  const res = pokemonDetailsRes.data;

  pokemon.id = res.id;
  pokemon.name = res.name;
  res.types.map((type) => pokemon.types.push(type.type.name));
  pokemon.image = res.sprites.other["official-artwork"].front_default;

  if (!all) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.image,
      types: pokemon.types,
    };
  }

  let speciesRes = await axios.get(res.species.url);
  const specie = speciesRes.data;

  pokemon.bio.height = res.height;
  pokemon.bio.weight = res.weight;
  res.abilities.map((ability) => pokemon.bio.abilities.push(ability));
  pokemon.training.base_exp = res.base_experience;

  pokemon.stats.hp = res.stats[0].base_stat;
  pokemon.stats.atk = res.stats[1].base_stat;
  pokemon.stats.def = res.stats[2].base_stat;
  pokemon.stats.sp_atk = res.stats[3].base_stat;
  pokemon.stats.sp_def = res.stats[4].base_stat;
  pokemon.stats.speed = res.stats[5].base_stat;

  pokemon.bio.description = specie.flavor_text_entries[0].flavor_text;
  pokemon.bio.habitat = specie.habitat.name;
  pokemon.bio.shape = specie.shape.name;
  pokemon.training.base_happiness = specie.base_happiness;
  pokemon.training.catch_rate = specie.capture_rate;
  pokemon.training.growth_rate = specie.growth_rate.name;

  pokemon.evolution = specie.evolution_chain.url;

  return pokemon;
}
