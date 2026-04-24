import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Counter'

describe('Counter', () => {
  it('должен отображать начальное значение 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('должен отображать заголовок Счетчик', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { name: 'Счетчик' })).toBeInTheDocument()
  })

  it('должен увеличивать счетчик при нажатии на кнопку +', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const plusButton = screen.getByText('+')

    await user.click(plusButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('должен уменьшать счетчик при нажатии на кнопку -', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const minusButton = screen.getByText('-')

    await user.click(minusButton)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  it('должен корректно обрабатывать несколько нажатий', async () => {
    render(<Counter />)
    const user = userEvent.setup()
    const plusButton = screen.getByText('+')
    const minusButton = screen.getByText('-')

    await user.click(plusButton)
    await user.click(plusButton)
    expect(screen.getByText('2')).toBeInTheDocument()

    await user.click(minusButton)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
