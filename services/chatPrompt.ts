import { Chat } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { CreateChatCompletionResponse } from 'openai'

export const chatPrompt = async (
  body: Chat
): Promise<AxiosResponse<CreateChatCompletionResponse>> => {
  return await axios.post('/api/chat', body)
}
