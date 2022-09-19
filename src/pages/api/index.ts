import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  name: string
  age: number
}

type Data = User[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const users: User[] = [
    { name: 'John Doe', age: 42 },
    { name: 'Jane Doe', age: 93 },
  ]

  res.status(200).json(users)
}
