import { screen } from "@testing-library/react"
import { renderWithProviders } from "utils/test-utils"
import Pagination from "./Pagination"

describe("Pagination", () => {
  it("renders 7 pagination items", () => {
    renderWithProviders(<Pagination currentPage={1} totalPages={10} />)

    const paginationItems = screen.getAllByRole("link")
    expect(paginationItems.length).toBe(7)
  })
})
