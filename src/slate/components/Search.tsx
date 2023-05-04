import { useEffect, useState } from 'react'
import { Search as SearchIcon } from '../../assets/svg/icon'
export const Search = ({ search, setSearch }) => {
  const [matchs, setMatchs] = useState<HTMLElement[]>([])
  const [current, setCurrent] = useState(0)
  const [showMatch, setShowMatch] = useState(false)
  useEffect(() => {
    const marks = document.querySelectorAll('mark')
    marks[0]?.scrollIntoView()
    setCurrent(marks.length ? 1 : 0)
    setMatchs([...marks])
  }, [search])
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const nextMark = current <= matchs.length - 1 ? current + 1 : 0
      matchs[nextMark]?.scrollIntoView()
      setCurrent(nextMark)
    }
  }
  return (
    <div className="search ml-auto relative flex items-center">
      <SearchIcon className="absolute ml-2" />
      <input
        onBlur={() => setShowMatch(false)}
        onFocus={() => setShowMatch(true)}
        value={search}
        placeholder="搜索"
        onKeyDown={handleKeyDown}
        className="border-blue-300  pl-[30px] pr-[40px] rounded border-2 outline-blue-600"
        onChange={e => setSearch(e.target.value)}
      />
      {showMatch && (
        <span className="absolute right-[10px] text-gray-600">
          {current}/{matchs.length}
        </span>
      )}
    </div>
  )
}
