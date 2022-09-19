import { FC, useMemo, useState } from 'react'

type Props = {
  text?: string
}

export const FizzBuzz: FC<Props> = ({ text = 'World' }) => {
  const [input, setInput] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const output = useMemo(() => {
    const num = Number(input)

    if (Number.isNaN(num) || num === 0) {
      return ''
    }
    if (num % 15 === 0) {
      return 'FizzBuzz'
    }
    if (num % 3 === 0) {
      return 'Fizz'
    }
    if (num % 5 === 0) {
      return 'Buzz'
    }
    return num
  }, [input])

  return (
    <div>
      <h1>Hello {text}!</h1>
      <input onChange={handleInput} type="text" data-testid="input" />
      <p data-testid="output">{output}</p>
    </div>
  )
}
