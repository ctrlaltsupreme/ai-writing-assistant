export type OpenAIChatBody = {
  model: string
  messages: Messages[]
  temperature: number
  max_tokens: number
}

export type Messages = {
  role: 'system' | 'user' | 'assistant'
  content: string
  name?: string
}

export type Chat = {
  language: string
  tone: string
  useCase: string
  keywords: string
}
