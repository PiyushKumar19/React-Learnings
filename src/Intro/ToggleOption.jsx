import { useState } from "react";

const ToggleOption = () =>{
    const [count, setCount] = useState(0);

    function UpdateCount() {
        setCount(count + 1);
    }

    return (
        <>
            {count == 0 ? <h2>No Title</h2> 
                : count == 1 ? <h3>Title 2</h3>
                : count == 2 ? <h3>Title 3</h3>
                : <h3>Title 4</h3>}        

            <button onClick={UpdateCount}>Toggle</button>
        </>
    )
}

export default ToggleOption;