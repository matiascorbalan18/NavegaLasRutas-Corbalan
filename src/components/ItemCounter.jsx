import { useState } from "react";

function ItemCounter () {
    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleSub = () => setCounter(counter - 1)

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </div>
    )
}

export default ItemCounter