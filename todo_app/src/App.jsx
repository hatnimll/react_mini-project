import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-[#F8F8FF] w-2/5 mx-auto min-w-[200px] h-[75vh] rounded-lg ">
      <h1 className="text-7xl my-7">Todo List</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
