import { Dinosaur } from "../../models/Dinosaur"
import ViewDinosaur from "./ViewDinosaur"

const Dinopedia = () => {
    const dinos: Dinosaur[] = [
        {
            name: 'Triceraptors',
            horns: 3
        },
        {
            name: 'Tyrannosaurus',
            horns: 0
        }
    ]

    return(
    <section>
        <h1>Dino List</h1>
        <ul>
            {dinos.map(dino => (
                <li key={dino.name}>
                    <ViewDinosaur dino={dino}/>
                </li>
            ))}
        </ul>
    </section>
    )
}

export default Dinopedia