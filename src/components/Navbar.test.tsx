import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navbar from "./Navbar"

describe('navbar component', () => {

    const items = ['Start', 'Info', 'About', 'Profile']

    //smoke test
    it('renders without crashing', () => {
        render( <Navbar items={items}/> )
    })

    //  Du ska inte testa att man faktiskt navigerar till en annan vy; utan bara att komponenten visar vilket element användaren har valt
    it('the component gets the css class "selected" when clicked', () => {
        render( <Navbar items={items}/> )
        // const li = screen.getByRole('listitem', {name: 'about'})
        
        const start = screen.getByText(/Start/i)
        const info = screen.getByText(/Info/i)
        const about = screen.getByText(/About/i)
        const profile = screen.getByText(/Profile/i)
        

        userEvent.click(start)
        expect(start).toHaveClass('selected')

        userEvent.click(info)
        expect(info).toHaveClass('selected')

        userEvent.click(about)
        expect(about).toHaveClass('selected')

        userEvent.click(profile)
        expect(profile).toHaveClass('selected')
    })
})