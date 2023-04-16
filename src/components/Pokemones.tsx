import React from "react"
import { useFetchPokemonsQuery } from "features/pokeApi"
import PokemonCard from "components/PokemonCard"

interface Props {
  page: number
}

const Pokemones = ({ page }: Props) => {
  const { data, isFetching, isError } = useFetchPokemonsQuery({
    page,
  })

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (isError || !data || !data.results.length) {
    return <div>Ooops, the pokemones has not been found</div>
  }

  return (
    <div className="flex gap-4 flex-wrap justify-center max-h-[75vh] overflow-y-scroll py-4 md:max-h-none md:overflow-y-auto">
      {data.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Pokemones
