import './assets/style/todolist.css'
import Btn_Input from './assets/style/Btn_Input'
import Todo_Content from './assets/style/TodoContent'
import Logo from './assets/react.svg'
const App = () => {
  let name = "Tô Minh Đức"
  let age = 21
  let data = {
    address: "Hà Nội",
    country: "Việt Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">
        <h1>Todo list</h1>
      </div>
      <div className="todo-item">
        <Btn_Input />
        <Todo_Content
          fullName={name}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={Logo} alt="ảnh " />
        </div>
      </div>
    </div>
  );
};

export default App;
