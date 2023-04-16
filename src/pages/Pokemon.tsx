import React from "react"
import { useParams } from "react-router-dom"
import { useFetchPokemonQuery } from "features/pokeApi"
import PokemonImage from "components/PokemonImage"

const PokemonPage = () => {
  const { pokemonId = "" } = useParams()
  const { data, isFetching, isError } = useFetchPokemonQuery({
    pokemonId,
  })

  if (isFetching) {
    return <div>Loading...</div>
  }

  if (isError || !data) {
    return <div>Ooops, the pokemon has not been found</div>
  }

  return (
    <>
      <h1 className="text-3xl pb-6">
        Home / <span className="capitalize">{data.name}</span>
      </h1>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="border-4 border-black max-w-[25rem]">
          <PokemonImage pokemonId={pokemonId} alt={data.name} />
        </div>
        <div className="w-full">
          <h1 className="text-3xl capitalize mb-6">{data.name}</h1>
          <div className="flex flex-col gap-2 font-medium">
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>Types</p>
              <p>{data.types.map(({ type }) => type.name)}</p>
            </div>
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>Height</p>
              <p>{data.height}</p>
            </div>
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>Weight</p>
              <p>{data.weight}</p>
            </div>
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>HP</p>
              <p>{data.hp}</p>
            </div>
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>Attack</p>
              <p>{data.attack}</p>
            </div>
            <div className="flex justify-between max-w-[16rem] w-full">
              <p>Defense</p>
              <p>{data.defense}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonPage
