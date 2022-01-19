import { Dinosaur } from "../../models/Dinosaur"

interface Props{
    dino: Dinosaur
}

const ViewDinosaur = ({dino}: Props) => (
    <div>
        <h3> {dino.name} </h3>
        I have {dino.horns} horns !
    </div>
)

export default ViewDinosaur

//Behöver skapa ett interface varje gång vi ska använda ett object t.ex för att tala om vad för slags datatyper vi kommer att använda