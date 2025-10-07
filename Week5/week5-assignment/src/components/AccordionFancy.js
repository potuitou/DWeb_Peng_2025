import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

/**
 * props.items: Array<{
 *   id: string
 *   label: React.ReactNode
 *   content: React.ReactNode
 *   gradient?: string // eg 'from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
 * }>
 */

const Accordion = ({ items }) => {

  const [expandedIndex, setExpandedIndex] = useState(-1)
  
  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1
      } else {
        return nextIndex
      }
    })
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = index === expandedIndex

        // customizeable gradient & fallback gradient
        const gradient =
          item.gradient ??
          'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'

        return (
          <div key={item.id} className="w-full">
            {/* gradient & hover */}
            <div className={`group bg-gradient-to-r ${gradient} p-0.5 rounded-xl`}>
              {/* one card that contain both header and content */}
              <div
                className="
                  rounded-[10px] bg-white dark:bg-gray-900
                  transition-colors duration-200 group-hover:bg-opacity-0
                "
              >
                {/* Header Button */}
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`acc-content-${item.id}`}
                  onClick={() => handleClick(index)}   // process by index
                  className="
                    flex w-full items-center justify-between gap-3
                    px-5 py-3
                  "
                >
                  <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors group-hover:text-white">
                    {item.label}
                  </span>

                  {/* chevron & roate angle */}
                  <GoChevronDown
                    className={`shrink-0 transition-transform duration-200 ${
                      open ? 'rotate-180 text-white' : 'rotate-0 group-hover:text-white'
                    }`}
                    size={20}
                  />
                </button>

                {/* division + content） */}
                <div
                  id={`acc-content-${item.id}`}
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div
                    className="
                      border-t
                      border-gray-200 dark:border-gray-700
                      group-hover:border-white/30
                    "
                  >
                    <div className={`${open ? 'p-4' : 'p-0'}`}>
                      <div className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-white/90">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
                {/* the end of the "card" */}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
