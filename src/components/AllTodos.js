const AllTodos = ({ toDoList, RiCloseCircleLine, BsFillPatchCheckFill, deleteToDo, checkTodo, user }) => {
    return (
        <>
            {toDoList.filter(toDo => toDo.user === user.id).map((toDo) => (
            <ul key={toDo.id} className="allTodos" >
            <li className="singleTodo">
              <span className={`todoText ${toDo.check ? "complete" : ""}`}> {toDo.task} </span>
              <RiCloseCircleLine className="deleteIcon" onClick={() => deleteToDo(toDo.id, toDo.task)} />
              <BsFillPatchCheckFill className="checkIcon" onClick={() => checkTodo(toDo.id)} />
            </li>
          </ul>))}
        </>
    )
}




export default AllTodos