function ToDo() {

    function CallAlert() {
        alert("Function called");
    }

    let puppyImage = "https://images.unsplash.com/25/puppy-love.jpg?q=80&w=969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <>
            <h2>Piyush Kumar Todos</h2>
            <img src={puppyImage}/>
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearce a movie scene</li>
                <li>Improve the spectrun technology</li>
            </ul>

            <button onClick={CallAlert}>Click Me</button>
        </>
    )
}

export default ToDo;