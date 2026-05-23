const Todo_Content = (props) => {
    const { fullName, age, data } = props
    return (
        <div className="todo-content">
            <p>
                My name is {fullName} and I'm {age} years old, form {data.address} - {data.country} <hr />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora
                error, nulla sequi a eveniet dolorum tempore nostrum quos dignissimos
                cupiditate minima facilis fugiat impedit modi eius laboriosam
                quibusdam temporibus illum corporis odit fuga tenetur voluptatibus
                dolor. Nemo dolor dolorum corporis qui? Quasi accusantium illo
                adipisci ab, perferendis omnis dolore?
            </p>
        </div>
    )
}
export default Todo_Content