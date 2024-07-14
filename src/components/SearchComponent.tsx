import React from "react"

interface SearchComponentProps {
    onSearch: (search: string) => void
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearch,
}) => {
  const [keyword, setKeyword] = React.useState("")

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="Artist / Album / Title"
        className="p-2 rounded-3xl text-center"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        disabled={keyword.length < 3}
        type="button"
        className="bg-violet-500 text-white p-2 rounded-3xl"
        onClick={() => onSearch(keyword)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchComponent
