import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg"
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg"

interface Props {
  currentPage: number
  totalPages: number
}

const getSurroundingPages = (currentPage: number, totalPages: number) => {
  const surroundingPages = []
  const pageDelta = 2

  let startIndex = Math.max(currentPage - pageDelta, 1)
  let endIndex = Math.min(currentPage + pageDelta, totalPages)

  if (currentPage - startIndex < pageDelta) {
    endIndex = Math.min(
      endIndex + (pageDelta - (currentPage - startIndex)),
      totalPages
    )
  }
  if (endIndex - currentPage < pageDelta) {
    startIndex = Math.max(
      startIndex - (pageDelta - (endIndex - currentPage)),
      1
    )
  }

  for (let i = startIndex; i <= endIndex; i++) {
    surroundingPages.push(i)
  }

  return surroundingPages
}

const Pagination = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="flex justify-center gap-1 text-xl pt-8">
      <Link
        className={`w-10 h-10 flex items-center justify-center border-2 border-black font-bold shadow-xl bg-no-repeat bg-center bg-white`}
        to={`/${currentPage === 1 ? "1" : currentPage - 1}`}
      >
        <ArrowLeft />
      </Link>
      {getSurroundingPages(currentPage, totalPages).map((page) => (
        <Link
          key={page}
          className={`w-10 h-10 flex items-center justify-center border-2 border-black font-semibold shadow-xl ${
            currentPage === page ? "bg-black text-white" : "bg-white text-black"
          }`}
          to={`/${page}`}
        >
          {page}
        </Link>
      ))}
      <Link
        className={`w-10 h-10 flex items-center justify-center border-2 border-black font-bold shadow-xl bg-no-repeat bg-center bg-white`}
        to={`/${currentPage === totalPages ? totalPages : currentPage + 1}`}
      >
        <ArrowRight />
      </Link>
    </div>
  )
}

export default Pagination
