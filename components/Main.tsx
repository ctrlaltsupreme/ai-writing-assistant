import { useState } from 'react'
import SelectDropdown from './SelectDropdown'
import SelectInput from './SelectInput'
import Answer from './Answer'
import { chatPrompt } from '@/services/chatPrompt'
import Skeleton from './Skeleton'

const languages: string[] = ['🇲🇽 Español', '🇺🇸 English']
const tone: string[] = ['factual', 'honest', 'candid', 'rude', 'respectful']
const cases: string[] = [
  'blog',
  'facebook ad',
  'idea and outline',
  'essay',
  'mail',
]

const Main = () => {
  const [value, setValue] = useState({
    language: languages[0],
    tone: tone[0],
    useCase: cases[0],
    keywords: '',
  })

  const [response, setResponse] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (key: string, v: string) => {
    setValue({ ...value, [key]: v })
  }

  const handleChat = async () => {
    setIsLoading(true)
    const chat = await chatPrompt({
      language: value.language,
      tone: value.tone,
      useCase: value.useCase,
      keywords: value.keywords,
    })
    if (chat.status === 200) {
      setResponse(chat.data.choices[0]?.message?.content)
    }
    setIsLoading(false)
  }
  return (
    <div className="flex h-screen">
      <div className="w-1/2 px-3">
        <div className="flex justify-between">
          <SelectDropdown
            title={'Selecciona Idioma'}
            options={languages}
            handleChange={handleChange}
            k={'language'}
          />
          <SelectDropdown
            title={'Selecciona tono'}
            options={tone}
            handleChange={handleChange}
            k={'tone'}
          />
        </div>
        <SelectDropdown
          title={'Selecciona el caso de uso'}
          options={cases}
          handleChange={handleChange}
          k={'useCase'}
        />
        <SelectInput
          handleChange={handleChange}
          k={'keywords'}
          value={value.keywords}
        />
        <div className="flex justify-center py-10">
          <button
            onClick={handleChat}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Escribe!
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-gray-800 px-3">
        {isLoading ? <Skeleton /> : <Answer answer={response} />}
      </div>
    </div>
  )
}

export default Main
