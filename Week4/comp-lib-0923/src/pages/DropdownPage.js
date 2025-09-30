import {useState} from 'react'
import Dropdown from '../components/Dropdown'

const options = [
  {label: 'Red', value: 'red'},
  {label: 'Green', value: 'green'},
  {label: 'Blue', value: 'blue'},
  {label: 'Orange', value: 'orange'},
]

const DropdownPage = () => {
  const [selection, setSelection] = useState(null)

  return (
    <div className="p-10 space-y-4">
      <Dropdown
        options={options}
        value={selection}
        onChange={setSelection}
        placeholder="Select a color"
      />
      {selection && (
        <p className="text-gray-700">You selected: {selection.label}</p>
      )}
    </div>
  )
}

export default DropdownPage
