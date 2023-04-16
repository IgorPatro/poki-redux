import { rest } from "msw"
import { setupServer } from "msw/node"

const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
    const mockApiResponse = {
      results: [
        {
          name: "test-pokemon",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
      ],
    }
    return res(ctx.json(mockApiResponse))
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/1", (req, res, ctx) => {
    const mockApiResponse = {
      name: "test-pokemon",
      height: 999,
      weight: 999,
      types: [
        {
          slot: 1,
          type: {
            name: "Test type",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
      ],
      stats: [
        {
          base_stat: 99,
          effort: 0,
          stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/",
          },
        },
        {
          base_stat: 99,
          effort: 0,
          stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/",
          },
        },
        {
          base_stat: 99,
          effort: 0,
          stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/",
          },
        },
      ],
    }

    return res(ctx.json(mockApiResponse))
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/error", (req, res, ctx) => {
    return res(ctx.status(500))
  }),
]

export { handlers }

const server = setupServer(...handlers)

export { server }
