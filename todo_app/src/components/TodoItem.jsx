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
        todo.id === id ? { ...todo, content: editInputValue } : todo
      )
    );
    setIsClickedEditButton(false);
    setEditInputValue(editInputValue);
  };

  const toggleEditButton = () => {
    setIsClickedEditButton((isClickedEditButton) => !isClickedEditButton);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <li className="mt-1 flex mx-6 flex-1">
      <input
        className="mr-3"
        type="checkbox"
        checked={todo.isChecked === true}
        onChange={() => handleToggleCheckbox(todo.id)}
      />
      {isClickedEditButton ? (
        <input
          className=" pl-2 outline-none grow"
          autoFocus
          value={editInputValue}
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
        <button className="mx-2" onClick={toggleEditButton}>
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