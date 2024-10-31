import { useTodos } from '../context/todosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useTodos();
  return (
    <section className="w-full h-3/5 border-solid border border-y-slate-400 py-10 px-20">
      <ul className="w-full h-full overflow-y-scroll scrollbar-hide">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
