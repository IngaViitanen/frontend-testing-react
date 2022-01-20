import { useState } from "react"


const Name = () => {
    const [validClass, setValidClass] = useState('')
    const [name, setName] = useState('')

    const validCheck = (name: string) => {
        if(name.length === 0){
            setValidClass('')
        } else if (!/[a-öA-Ö]+$/.test(name)){
            setValidClass('invalid')
        } else {
            setValidClass('valid')
        }
    }

    const onChangeHandler = (e: any) => {
        setName(e.target.value)
        validCheck(e.target.value)
    }

    return(
        <div>
            <div>
            {name.length > 0 
            ? validClass 
            : (<p>please type in your name</p>)}
            </div>

            <input 
            type="text" 
            placeholder="Write your name here..." 
            value={name}
            onChange={onChangeHandler} 
            className={validClass}
            />
        </div>
    )
}

export default Name