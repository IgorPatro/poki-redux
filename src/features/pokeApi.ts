import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { POKIMONS_PAGE_SIZE, MAX_POKIMONES } from "const"

const generateApiUrl = (page: number, limit: number = POKIMONS_PAGE_SIZE) => {
  const offset = (page - 1) * limit

  if (offset + limit > MAX_POKIMONES)
    // We are manually setting the limit to the remaining pokimones
    // limit has to be less than 0 to not fetch any pokimones
    // we are using this little "bug"
    return `pokemon?offset=${offset}&limit=${MAX_POKIMONES - offset}`

  return `pokemon?offset=${offset}&limit=${limit}`
}

interface AllPokemonesQuery {
  page: number
}

export interface BasicPokemon {
  name: string
  url: string
}

interface AllPokemonesResponse {
  count: number
  next: string
  previous: string
  results: BasicPokemon[]
}

interface PokemonQuery {
  pokemonId: string
}

interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

// There are not all the properties of the Pokemon listed
// because we are not using them in the app
// We should provide the full interface
// and then pick the properties we need
// but in the sake of simplicity we are not doing it
interface Pokemon {
  types: PokemonType[]
  height: number
  weight: number
  stats: Stat[]
  name: string
}

interface FormattedPokemon extends Pokemon {
  hp: number
  attack: number
  defense: number
}

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query<AllPokemonesResponse, AllPokemonesQuery>({
      query: ({ page }) => generateApiUrl(page),
    }),
    fetchPokemon: builder.query<FormattedPokemon, PokemonQuery>({
      query: ({ pokemonId }) => `pokemon/${pokemonId}`,
      transformResponse: (response: Pokemon): FormattedPokemon => {
        return {
          ...response,
          hp:
            response.stats.find((stat) => stat.stat.name === "hp")?.base_stat ||
            0,
          attack:
            response.stats.find((stat) => stat.stat.name === "attack")
              ?.base_stat || 0,
          defense:
            response.stats.find((stat) => stat.stat.name === "defense")
              ?.base_stat || 0,
        }
      },
    }),
  }),
})

export const { useFetchPokemonsQuery, useFetchPokemonQuery } = pokeApi
