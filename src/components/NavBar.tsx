import React from "react"

interface NavBarProps {
    onBackToHome: () => void
    onSearch: () => void
}

const NavBar: React.FC<NavBarProps> = ({
  onBackToHome,
  onSearch,
}) => {
  return (
    <nav className="relative w-full top-0 bg-violet-500">
      <div className="flex flex-row justify-between items-center h-14 px-4">
        <button type="button" onClick={() => onBackToHome()}>
          <img src="/menu.png" alt="user" width={14} height={14} />
        </button>
        <label className="text-white text-2xl">ngmusic</label>
        <button type="button" onClick={() => onSearch()}>
          <img src="/search.png" alt="user" width={14} height={14} />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
