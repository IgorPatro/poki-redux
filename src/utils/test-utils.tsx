import React, { PropsWithChildren } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { PreloadedState } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { setupStore } from "store"
import type { AppStore, RootState } from "store"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
  route?: string
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    route = "/",
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export { renderWithProviders }
