import { screen } from "@testing-library/react"
import { renderWithProviders } from "utils/test-utils"
import Home from "./Home"

describe("Home page", () => {
  it("renders Pokedex heading", () => {
    renderWithProviders(<Home />)

    const headingElement = screen.getByText(/pokedex/i)
    expect(headingElement).toBeInTheDocument()
  })

  it("shows loading state on initial render", () => {
    renderWithProviders(<Home />)

    const loadingElement = screen.getByText(/loading/i)
    expect(loadingElement).toBeInTheDocument()
  })

  it("renders test-pokemon on pokemones list", async () => {
    renderWithProviders(<Home />)

    const pokemon = await screen.findByText(/test-pokemon/i)
    expect(pokemon).toBeInTheDocument()
  })
})
