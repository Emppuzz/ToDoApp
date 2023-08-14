const TodoForm = ({ addToDo, handleToDoChange, newToDo }) => {
    return (
        <>
            <form className="todoForm" onSubmit={addToDo}>
                <input value={newToDo} onChange={handleToDoChange} />
                <button type="submit">ADD</button>
            </form>
            <br></br>
        </>
    )
}

export default TodoForm