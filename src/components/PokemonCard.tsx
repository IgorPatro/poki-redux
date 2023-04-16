import React from "react"
import { Link } from "react-router-dom"
import { type BasicPokemon } from "features/pokeApi"
import { getIdFromUrl } from "utils/getIdFromUrl"
import PokemonImage from "components/PokemonImage"

interface Props {
  pokemon: BasicPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const pokemonId = getIdFromUrl(pokemon.url)

  return (
    <Link
      to={`/pokemon/${pokemonId}`}
      className="flex flex-col w-72 border-2 border-black p-4 hover:shadow-xl transition-shadow justify-center items-center"
    >
      <div className="w-full aspect-square">
        <PokemonImage pokemonId={pokemonId} alt={pokemon.name} />
      </div>
      <h2 className="text-xl capitalize">{pokemon.name}</h2>
    </Link>
  )
}

export default PokemonCard
