import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <section className="w-full h-3/5 border-t py-10 px-20 flex justify-center">
      {todos.length > 0 ? (
        <ul className="w-full h-full overflow-y-scroll scrollbar-hide">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p className="text-xl text-gray-500">할 일 목록이 없습니다.</p>
      )}
    </section>
  );
}

export default TodoList;
