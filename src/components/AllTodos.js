const AllTodos = ({ toDoList, RiCloseCircleLine, BsFillPatchCheckFill, deleteToDo, checkTodo }) => {
    return (
        <>
            {toDoList.map(toDo =>
            <ul key={toDo.id} className="allTodos" >
            <li className="singleTodo">
              <span className={`todoText ${toDo.check ? "complete" : ""}`}> {toDo.task} </span>
              <RiCloseCircleLine className="deleteIcon" onClick={() => deleteToDo(toDo.id, toDo.task)} />
              <BsFillPatchCheckFill className="checkIcon" onClick={() => checkTodo(toDo.id)} />
            </li>
          </ul>)}
        </>
    )
}

export default AllTodos