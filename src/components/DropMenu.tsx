import { useState } from "react"

const DropMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <nav>
            <button onClick={() => setMenuVisible(!menuVisible)}>Menu</button>
            { menuVisible ? (
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            ) : null}
        </nav>
    )
}

export default DropMenu