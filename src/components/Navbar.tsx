import { useState } from "react"

interface Props {
    items: string[]
}

const Navbar = (props: Props) => {

    const [chosenElem, setChosenElem] = useState(0)
    
    const onClickHandler = (index: number) => {
        setChosenElem(index)
    }

    return(
       <nav>
           <ul className="navbar">
               {props.items.map((item, index) => (
                   <li
                    key={item}
                    className={index === chosenElem ? "selected" : ""}
                    onClick={() => onClickHandler(index)}
                   >
                        {item}
                   </li>
               ))}
           </ul>
       </nav>
    )
}

export default Navbar