const Todo_Content = (props) => {
    const { todoList,deleteTodo } = props
    // console.log("Todo_Content ", props)
    // const todoList = props.todoList
    console.log("in ra", todoList)// kế thừa component todolist từ app.jsx(props)
    const handleClickDelete = (id) => {
        deleteTodo(id)
    }
    return (
        <div className="todo-content">
            {todoList.map((item, index) => {
                {console.log("check map: ", item, index)}
                return (
                    <div className="btn-todo-content" key={item.id}>
                        <div>
                            {item.id}.{item.name}
                        </div>
                        <button
                            onClick={()=>handleClickDelete(item.id)}
                        >delete</button>
                    </div>
                )
            })}
            {
                console.log("check item: ",)
            /* <p>
                My name is {props.name} and I'm {props.age} years old, form {props.data.address} - {props.data.country} <hr />
            </p> */}
            <div
                style={{
                    color: "red",
                    fontSize: "20px",
                    fontWeight: "bold"
                }}>
                {/* {JSON.stringify(props.todoList)} */}
            </div>
        </div>
    )
}
export default Todo_Content