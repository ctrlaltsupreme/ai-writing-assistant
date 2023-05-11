import { NextApiRequest, NextApiResponse } from 'next'
import { Chat } from '@/types'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tone, language, useCase, keywords }: Chat = req.body

  try {
    const { data } = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `You are generating text, the use case must be: ${useCase}, the tone should be: ${tone}, the text must include the following keywords: ${keywords}, and the answer must be in: ${language}.`,
        },
      ],
      temperature: 1.0,
      max_tokens: 1000,
    })

    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
