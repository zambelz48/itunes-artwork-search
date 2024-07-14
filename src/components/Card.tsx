import { isStringEmpty } from "@/utils/common"
import React from "react"

interface CardProps {
  title?: string
  description?: string
  genre?: string
  price?: number
  thumbnail?: string
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  genre,
  price,
  thumbnail,
}) => {
  return (
    <div className="flex flex-row gap-4 bg-white p-4 rounded-xl shadow-md mx-4 mt-4">
      <div className="basis-1/3 relative bg-gray-500 rounded-xl w-28 h-28">
        {!isStringEmpty(thumbnail) && (
        <img
          src={thumbnail}
          alt={title}
          className="object-fill w-full h-full rounded-xl"
        />
        )}
        <img
          src="/play-circle.png"
          alt="play-image"
          className="absolute inset-0 mt-10 ml-10 w-8 h-8"
        />
      </div>
      <div className="basis-2/3 flex flex-col w-full items-start relative">
        <text className="text-gray-400 text-xs text-left">
          {isStringEmpty(title) ? "Unknown" : title}
        </text>
        <text className="text-gray-500 text-md font-semibold text-left text-ellipsis">
          {isStringEmpty(description) ? "Unknown" : description}
        </text>
        <div className="flex flex-row items-center justify-between w-full absolute inset-x-0 bottom-0">
          <text className="bg-green-600 px-4 py-1 text-white rounded-2xl text-xs">
            {isStringEmpty(genre) ? "-" : genre}
          </text>
          <div className="flex flex-row gap-2">
            <img src="/currency-dollar.png" alt="price" className="w-4 h-4 rounded-full" />
            <text className="text-xs text-yellow-500">
              {!price ? "-" : price}
            </text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
