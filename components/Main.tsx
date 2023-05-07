import React from 'react'
import SelectDropdown from './SelectDropdown'
import SelectInput from './SelectInput'
import Answer from './Answer'

type Props = {}

const languages: string[] = ['🇲🇽 Español', '🇺🇸 English']
const tone: string[] = ['factual', 'honest', 'candid', 'rude', 'respectful']
const cases: string[] = [
  'blog',
  'facebook ad',
  'idea and outline',
  'essay',
  'mail',
]

const Main = (props: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 px-3">
        <div className="flex justify-between">
          <SelectDropdown
            title={'Selecciona Idioma'}
            options={languages}
          />
          <SelectDropdown
            title={'Selecciona tono'}
            options={tone}
          />
        </div>
        <SelectDropdown
          title={'Selecciona el caso de uso'}
          options={cases}
        />
        <SelectInput />
        <div className="flex justify-center py-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Escribe!
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-gray-800 px-3">
        <Answer
          answer={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita impedit enim eum animi optio sint neque, non velit laboriosam, fugiat nostrum sed amet officiis consequuntur temporibus nihil veniam ab numquam repudiandae dicta! Provident adipisci quo fugit in itaque illum reiciendis, tempore ex nesciunt! Voluptates, maiores labore distinctio praesentium omnis adipisci.'
          }
        />
      </div>
    </div>
  )
}

export default Main
