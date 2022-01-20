import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Name from './Name'

describe('name component', () => {

    it('renders without crashing', () => {
        render( <Name/> )
    })

    it('the input-field is initially empty and has no CSS-classes', () => {
        render( <Name/> )

        const inputField = screen.getByPlaceholderText('Write your name here...')
        expect(inputField).toHaveValue('')
        expect(inputField).not.toHaveClass('valid')
        expect(inputField).not.toHaveClass('invalid')
    })

    it('when the user types a valid name, the input-field gets the CSS-class "valid"', () => {
        //a valid name contains letters and whitespace
        render( <Name/> )

        const inputField = screen.getByPlaceholderText('Write your name here...')

        userEvent.type(inputField as HTMLElement, 'Random Name')
        expect(inputField).toHaveClass('valid')

        userEvent.type(inputField as HTMLElement, 'Name')
        expect(inputField).toHaveClass('valid')
    })
    
    it('when the user types an invalid name, the input-field gets the CSS-class "invalid"', () => {
        render( <Name /> )

        const inputField = screen.getByPlaceholderText('Write your name here...')

        userEvent.type(inputField as HTMLElement, 'Name+?123')

        expect(inputField).toHaveClass('invalid')
    })
   
    it('if the user leaves the input-field empty, the message "please type in your name" will be shown', () => {
        render( <Name /> )

        const inputField = screen.getByPlaceholderText('Write your name here...')
        const message = screen.getByText('please type in your name')

        userEvent.type(inputField as HTMLElement, '')

        expect(message).toBeInTheDocument()
    })
})