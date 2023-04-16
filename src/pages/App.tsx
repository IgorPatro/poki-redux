import { Route, Routes } from "react-router-dom"
import HomePage from "pages/Home"
import PokemonPage from "pages/Pokemon"

const App = () => {
  return (
    <div className="app bg-gray-100 text-slate-800 min-h-screen p-10">
      <Routes>
        <Route path="/:pageId?" element={<HomePage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
      </Routes>
    </div>
  )
}

export default App
