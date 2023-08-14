const EmptyListChecker = ({ toDoList }) => {
    return (
        <>
            {toDoList.length ? '' : 'Nothing here yet...'}
        </>
    )
}

export default EmptyListChecker