
const TodoItem = ({ task, date, isCompleted, id, onDelete, onStatusUpdate, onUpdate }) => {
    const HandleUpdate = () => {
        onUpdate({ task, date, isCompleted, id })
    }

    return (
        <div>
            <h3>{task}</h3>
            <p>Due:{date}</p>
            <button onClick={() => onStatusUpdate(id)}>
                {isCompleted ? "mark as pending" : "mark as completed"}
            </button>
            <button onClick={HandleUpdate}>
                update
            </button>
            <button onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default TodoItem