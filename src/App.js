import Todo from "./components/Todo"
import Modal from "./components/Modal"
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>Gregory's Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Practice React' />
      <Todo text='Master React' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
