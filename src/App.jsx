import './assets/style/todolist.css'
import Btn_Input from './assets/style/Btn_Input'
import Todo_Content from './assets/style/TodoContent'
import Logo from './assets/react.svg'
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
const App = () => {
  // const name = "Tô Minh Đức"
  // const age = 21
  // const data = {
  //   address: "Hà Nội",
  //   country: "Việt Nam"
  // }
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Tô Minh Đức" },
    { id: 2, name: "Nguyễn Văn A" },
    { id: 3, name: "Trần Văn B" }

  ])
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo) // gan nguoc lai
    console.log("delete", id)
  }

  const dataNew = (name) => {
    const addData = {
      id: todoList.length + 1,
      name: name
    }
    setTodoList([...todoList, addData])
    // alert(`Thêm mới thành công "${name}"`)
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">
          <h1>Todo list</h1>
        </div>
        <div className="todo-item">
          <Btn_Input
            dataNew={dataNew}
          />

          {todoList.length > 0 ?
            <Todo_Content
              // fullName={name}
              // age={age}
              // data={data}
              todoList={todoList}
              deleteTodo={deleteTodo}
            />
            :
            <div className="todo-image">
              <img src={Logo} alt="ảnh " />
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
