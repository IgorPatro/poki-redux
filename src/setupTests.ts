import "@testing-library/jest-dom"

import { server } from "utils/mswServer"

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
