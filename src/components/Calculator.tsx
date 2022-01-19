import { useState } from "react"

const Calculator = () => {
    const [value, setValue] = useState(1)
    return (<> 
    <header>
        <h1>Calculator</h1>
    </header>
    <main>
        <button onClick={ () => setValue(0)} data-testid="button-clear">Clear</button>
        <button onClick={ () => setValue(value + 1)} data-testid="button-increase">+1</button>
        <button onClick={ () => setValue(value - 1)} data-testid="button-decrease">-1</button>
        <p className="result">
            <code> Value: {value} </code>
        </p>
    </main>
    </>)
}

export default Calculator