import React from "react"

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-500" />
      <text className="text-violet-500 text-2xl font-semibold">
        Loading data
      </text>
    </div>
  )
}

export default Loading
