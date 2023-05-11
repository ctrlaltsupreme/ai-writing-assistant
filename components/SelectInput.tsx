import React from 'react'

type Props = {
  handleChange: (k: string, v: string) => void
  k: string
  value: string
}

const SelectInput = ({ handleChange, k, value }: Props) => {
  return (
    <div className="py-2 me-5">
      <label
        htmlFor="texto"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Keywords
      </label>
      <input
        onChange={(e) => handleChange(k, e.target.value)}
        id="texto"
        value={value}
        placeholder="Escribe palabras clave"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  )
}

export default SelectInput
