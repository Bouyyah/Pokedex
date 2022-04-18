import axios from 'axios';



export async function  getPokemon(pokeName) {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let pokemon = {
        'id': 0,
        'name': '',
        'types': [],
        'image': '',
        'bio': {
            'description': '',
            'shape': '',
            'height': '',
            'weight': '',
            'abilities': [],
            'habitat': ''
        },
        'training': {
            'base_exp': 0,
            'base_happiness': 0,
            'catch_rate': 0,
            'growth_rate': ''
        },
        'evolution': [],
        'stats': {
            'hp': 0,
            'atk': 0,
            'def': 0,
            'sp_atk': 0,
            'sp_def': 0,
            'speed': 0
        }
    };
    await axios
        .get(pokeUrl)
        .then(async (response) => {
            const res = response.data;

            pokemon.id = res.id;
            pokemon.name = res.name;
            res.types.map(type => pokemon.types.push(type.type.name));
            pokemon.image = res.sprites.other["official-artwork"].front_default;

            pokemon.bio.height = res.height;
            pokemon.bio.weight = res.weight;
            res.abilities.map(ability => pokemon.bio.abilities.push(ability));
            pokemon.training.base_exp = res.base_experience;

            pokemon.stats.hp = res.stats[0].base_stat;
            pokemon.stats.atk = res.stats[1].base_stat;
            pokemon.stats.def = res.stats[2].base_stat;
            pokemon.stats.sp_atk = res.stats[3].base_stat;
            pokemon.stats.sp_def = res.stats[4].base_stat;
            pokemon.stats.speed = res.stats[5].base_stat;


            await axios.get(res.species.url).then(async response => {
                const specie = response.data;
                pokemon.bio.description = specie.flavor_text_entries[0].flavor_text;
                pokemon.bio.habitat = specie.habitat.name;
                pokemon.bio.shape = specie.shape.name;
                pokemon.training.base_happiness = specie.base_happiness;
                pokemon.training.catch_rate = specie.capture_rate;
                pokemon.training.growth_rate = specie.growth_rate.name;

                await axios.get(specie.evolution_chain.url).then(response => {
                    const evo = response.data;
                    pokemon.evolution.push(evo.chain.species.name);
                    if (evo.chain.evolves_to.length > 0 && evo.chain !== undefined) {
                        pokemon.evolution.push(evo.chain.evolves_to[0].species.name);

                        if (evo.chain.evolves_to[0].evolves_to.length > 0) {
                            pokemon.evolution.push(evo.chain.evolves_to[0].evolves_to[0].species.name);
                        }
                    }
                    


                });
            });
        });
    return pokemon;
}