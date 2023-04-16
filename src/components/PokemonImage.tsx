import React from "react"

interface Props {
  pokemonId: string
  alt: string
}

const getImage = (pokemonId: string) => {
  let pokemonImage: string

  try {
    pokemonImage = require(`assets/${pokemonId}.png`)
  } catch (_e) {
    pokemonImage = require(`assets/0.png`)
  }

  return pokemonImage
}

const PokemonImage = ({ pokemonId, alt }: Props) => {
  return (
    <div>
      <img src={getImage(pokemonId)} alt={alt} />
    </div>
  )
}

export default PokemonImage
