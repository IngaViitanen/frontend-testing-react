import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'
import userEvent from '@testing-library/user-event'

describe('Calculator component', () => {

    it('renders without crashing', () => {
        render( <Calculator/> )
    })

    it('displays the value 1 initially', () => {
        render( <Calculator/> )
        const element = screen.getByText(/Value: 1/i)
        // /Value: 1/i
        // /i gör strängen man söker efter case insensitive
        // regulära uttrycket /i ger inte error om strängen bara matchar en del av strängen
        expect(element).toBeInTheDocument()
    })

    it('displays the value 2 when user clicks on +1', () => {
        render( <Calculator/> )
        const button = screen.getByTestId('button-increase')
        userEvent.click(button)

        const element = screen.getByText(/Value: 2/i)
        expect(element).toBeInTheDocument()
    })


    it('displays the value 0 when user clicks on -1', () => {
        render( <Calculator/> )
        const button = screen.getByTestId('button-decrease')
        userEvent.click(button)

        const element = screen.getByText(/Value: 0/i)
        expect(element).toBeInTheDocument()
    })


    it('displays the value 0 when user clicks on Clear', () => {
        render( <Calculator/> )
        const button = screen.getByTestId('button-clear')
        // getByRole(’button’, { name: ’Clear’ })
        userEvent.click(button)

        const element = screen.getByText(/Clear/i)
        expect(element).toBeInTheDocument()
    })
})