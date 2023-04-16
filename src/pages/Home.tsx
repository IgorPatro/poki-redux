import React from "react"
import { useParams } from "react-router-dom"
import Pagination from "components/Pagination"
import { MAX_POKIMONES, POKIMONS_PAGE_SIZE } from "const"
import Pokemones from "components/Pokemones"

const HomePage = () => {
  const { pageId = "1" } = useParams()
  const page = parseInt(pageId)

  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl pb-6">Pokedex</h1>
        <div className="min-h-[50vh]">
          <Pokemones page={page} />
        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(MAX_POKIMONES / POKIMONS_PAGE_SIZE)}
      />
    </>
  )
}

export default HomePage
