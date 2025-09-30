import {useEffect, useRef, useState} from 'react'
import {GoChevronDown} from 'react-icons/go'

// options: [{label, value}], value: current selection object
const Dropdown = (props) => {
  const {options, value, onChange, placeholder = 'Select...'} = props
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler, true)
    }
  }, [])

  const handleOptionClick = (option) => {
    setIsOpen(false)

    if (option.value !== value?.value) {
      onChange?.(option)
    }
  }

  const renderedOptions = options.map((option) => {
    const isSelected = option.value === value?.value

    return (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option)}
        className={`px-3 py-2 cursor-pointer hover:bg-sky-100 ${isSelected ? 'bg-sky-100 font-semibold' : ''}`}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={divEl} className="relative w-64">
      <div
        onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        className="flex items-center justify-between px-3 py-2 border rounded bg-white shadow-sm cursor-pointer"
      >
        {value?.label || placeholder}
        <GoChevronDown className={`text-lg transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 border rounded bg-white shadow-md z-10">
          {renderedOptions}
        </div>
      )}
    </div>
  )
}

export default Dropdown
