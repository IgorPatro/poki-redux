import { Route, Routes } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>
        Pokedex
      </h1>
    </div>
  )
}

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
