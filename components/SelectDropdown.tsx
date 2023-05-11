import React from 'react'

type Props = {
  title: string
  options: string[]
  handleChange: (key: string, v: string) => void
  k: string
}

const SelectDropdown = ({ options, title, handleChange, k }: Props) => {
  return (
    <div className="py-2 grow me-5">
      <label
        htmlFor="idioma"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        onChange={(e) => handleChange(k, e.target.value)}
        className="bg-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((o) => (
          <option
            key={o}
            value={o}
          >
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectDropdown
