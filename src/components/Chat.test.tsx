import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Chat from "./Chat"

describe('chat component', () => {
    //smoke test
    it('renders without crashing', () => {
        render( <Chat/> )
    })

    it('the input field is not visible initially', () => {
        render( <Chat/> )

        const inputField = screen.queryByPlaceholderText('say hello')
        
        expect(inputField).not.toBeInTheDocument()
    })

    it('the input field becomes visible when user clicks on the icon', () => {
        render( <Chat/> )

        const button = screen.getByRole('button', {name: 'CHAT'})
        userEvent.click(button)

        const inputField = screen.queryByPlaceholderText('say hello')
        expect(inputField).toBeInTheDocument()
    })

    it('the input field becomes invisible when the chat is open by clicking on the icon', () => {
        render( <Chat/> )

        const button = screen.getByRole('button', {name: 'CHAT'})

        userEvent.click(button)
        userEvent.click(button)

        const inputField = screen.queryByPlaceholderText('say hello')
        expect(inputField).not.toBeInTheDocument()
    })

    it('when the user presses Enter the input field becomes empty', () => {
        render( <Chat/> )

        const button = screen.getByRole('button', {name: 'CHAT'})
        userEvent.click(button)

        const inputField = screen.queryByPlaceholderText('say hello')
        userEvent.type(inputField as HTMLElement, 'hejhej')
        userEvent.keyboard('{Enter}')

        expect(inputField).toHaveValue('')
    })

    it('when the user has typed in the input field and pressed Enter the string becomes visible on the canvas', () => {
        render( <Chat/> )

        const button = screen.getByRole('button', {name: 'CHAT'})
        userEvent.click(button)

        const inputField = screen.queryByPlaceholderText('say hello')
        userEvent.type(inputField as HTMLElement, 'hejhej')
        userEvent.keyboard('{Enter}')

        const messageString = screen.getByText('hejhej')
        expect(messageString).toBeInTheDocument()
        
        expect(inputField).toHaveValue('')

    })

})