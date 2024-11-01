import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { useTodos } from '../context/todosContext';

function TodoItem({ todo }) {
  const { todos, setTodos } = useTodos();
  const [editInputValue, setEditInputValue] = useState(todo.content);
  const [isClickedEditButton, setIsClickedEditButton] = useState(false);

  const handleToggleCheckbox = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const handleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: editInputValue.trim() } : todo
      )
    );
    setIsClickedEditButton(false);
  };

  const toggleEditButtonClick = () => {
    setIsClickedEditButton(true);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li className=" flex flex-1 text-4xl gap-4 mb-7">
      <input
        className="w-8"
        type="checkbox"
        checked={todo.isChecked === true}
        onChange={() => handleToggleCheckbox(todo.id)}
      />
      {isClickedEditButton ? (
        <input
          className=" pl-2 outline-none grow"
          autoFocus
          value={editInputValue.trim()}
          onChange={(e) => setEditInputValue(e.target.value)}
        />
      ) : (
        <p
          className={`grow ${
            todo.isChecked ? 'text-gray-400 line-through' : 'text-black'
          }`}
        >
          {todo.content}
        </p>
      )}
      {isClickedEditButton ? (
        <button className="mx-2" onClick={() => handleEditTodo(todo.id)}>
          <FaCheck /> {/*완료*/}
        </button>
      ) : (
        <button className="mx-2" onClick={toggleEditButtonClick}>
          <MdOutlineEdit /> {/*수정*/}
        </button>
      )}
      <button onClick={() => handleDelete(todo.id)}>
        <FaRegTrashAlt /> {/*삭제*/}
      </button>
    </li>
  );
}

export default TodoItem;
