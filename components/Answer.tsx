import React from 'react'

type Props = {
  answer: string | undefined
}

const Answer = ({ answer }: Props) => {
  return (
    <div className="py-2 grow me-5">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Respuesta:
      </label>
      <p className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {answer}
      </p>
    </div>
  )
}

export default Answer
