import React from "react"
import SearchComponent from "./SearchComponent"

interface SearchModalProps {
  show: boolean
  onClose: () => void
  onSearch: (search: string) => void
}

const SearchModal: React.FC<SearchModalProps> = ({
  show = false,
  onClose,
  onSearch,
}) => {
  return show ? (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <button type="button" className="absolute top-4 right-4" onClick={() => onClose()}>
        <img src="/x.png" alt="close" width={14} height={14} />
      </button>
      <div className="flex flex-col items-center w-full md:max-w-lg p-8 gap-8">
        <text className="text-white text-2xl">Search</text>
        <SearchComponent onSearch={onSearch} />
      </div>
    </div>
  ) : null
}

export default SearchModal
