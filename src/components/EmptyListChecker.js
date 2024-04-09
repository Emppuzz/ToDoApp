const EmptyListChecker = ({ toDoList, user }) => {
    const hasUserTodos = toDoList.some(todo => todo.user === user.id)
    return (
        <>
            {!hasUserTodos && "Nothing here yet..."}
        </>
    )
}

export default EmptyListChecker


