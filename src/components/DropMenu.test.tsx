import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DropMenu from "./DropMenu"


describe('dropdown menu component', () => {

    //smoke test
    it('renders without crashing', () => {
        render( <DropMenu/> )
    })

    it('menu button exists', () => {
        render( <DropMenu/> )
        const button = screen.getByRole('button')
        expect(button)
    })

    it('menu items do not show initially', () => {
        render( <DropMenu/> )
        const items = screen.queryAllByRole('listitem')
        const firstItem = items[0]
        expect(firstItem).toBeUndefined()

        
    })

    it('menu items do show when the user clicks the menu button', () => {
        render( <DropMenu/> )
        const button = screen.getByRole('button')
        // console.log('menu button', button)

        userEvent.click(button)

        const items = screen.queryAllByRole('listitem')
        expect(items.length).toBeGreaterThan(0)
    })
    
    it('menu items do not show when the user clicks the menu button again', () => {
        render( <DropMenu/> )
        const button = screen.getByRole('button')

        userEvent.click(button)
        userEvent.click(button)

        const items = screen.queryAllByRole('listitem')
        expect(items.length).toBe(0)
    })
})
