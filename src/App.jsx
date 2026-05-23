import './assets/style/todolist.css'
import Btn_Input from './assets/style/Btn_Input'
import Todo_Content from './assets/style/TodoContent'
import Logo from './assets/react.svg'
const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">
        <h1>Todo list</h1>
      </div>
      <div className="todo-item">
        <Btn_Input />
        <Todo_Content />
        <div className="todo-image">
          <img src={Logo} alt="ảnh " />
        </div>
      </div>
    </div>
  );
};

export default App;
