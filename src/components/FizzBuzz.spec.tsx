import { render, screen } from '@testing-library/react'
import { FizzBuzz } from '@/components/FizzBuzz'
import userEvent from '@testing-library/user-event'

describe('FizzBuzz', () => {
  it('1を入力したとき1が出力される', async () => {
    const user = userEvent.setup()
    render(<FizzBuzz />)

    const input = screen.getByTestId('input')
    const p = screen.getByTestId('output')

    await user.type(input, '1')
    expect(p).toHaveTextContent('1')
  })
  it('3を入力したときFizzが出力される', async () => {
    const user = userEvent.setup()
    render(<FizzBuzz />)

    const input = screen.getByTestId('input')
    const p = screen.getByTestId('output')

    await user.type(input, '3')
    expect(p).toHaveTextContent('Fizz')
  })
  it('5を入力したときBuzzが出力される', async () => {
    const user = userEvent.setup()
    render(<FizzBuzz />)

    const input = screen.getByTestId('input')
    const p = screen.getByTestId('output')

    await user.type(input, '5')
    expect(p).toHaveTextContent('Buzz')
  })
  it('15を入力したときFizzBuzzが出力される', async () => {
    const user = userEvent.setup()
    render(<FizzBuzz />)

    const input = screen.getByTestId('input')
    const p = screen.getByTestId('output')

    await user.type(input, '15')
    expect(p).toHaveTextContent('FizzBuzz')
  })
})
export {}
