import { screen } from "@testing-library/react"
import { renderWithProviders } from "utils/test-utils"
import { Route, Routes } from "react-router-dom"
import Pokemon from "./Pokemon"

const renderPokemonView = (route = "/pokemon/1") =>
  renderWithProviders(
    <Routes>
      <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
    </Routes>,
    {
      route,
    }
  )

describe("Pokemon page", () => {
  it("renders loading state on initial render", () => {
    renderPokemonView()

    const loadingElement = screen.getByText(/loading/i)
    expect(loadingElement).toBeInTheDocument()
  })

  it("renders test-pokemon data", async () => {
    renderPokemonView()

    const pokemonNames = await screen.findAllByText(/test-pokemon/i)
    expect(pokemonNames.length).toBeGreaterThan(0)

    const hpLabel = await screen.findByText(/hp/i)
    expect(hpLabel).toBeInTheDocument()
  })

  it("renders image", async () => {
    renderPokemonView()

    const image = await screen.findByRole("img", { name: /test-pokemon/i })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "1.png")
  })

  it("renders error state", async () => {
    renderPokemonView("/pokemon/error")

    const errorElement = await screen.findByText(/not been found/i)
    expect(errorElement).toBeInTheDocument()
  })
})
