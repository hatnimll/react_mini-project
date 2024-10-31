import { useCallback, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useTodos } from '../context/todosContext';

function AddTodo() {
  const { setTodos } = useTodos();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim().length === 0) {
      setInputValue('');
      return;
    }
    setTodos((prevTodoList) => [
      ...prevTodoList,
      {
        id: Number(new Date()),
        content: inputValue,
        isChecked: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <section className="w-full h-1/5 flex justify-center items-center text-4xl">
      <input
        className="w-9/12 h-1/2 bg-white outline-none border border-solid border-gray-400 border-r-transparent pl-3 placeholder:focus:text-transparent"
        type="text"
        value={inputValue}
        placeholder=" 할 일을 입력하세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="w-20 h-1/2 flex justify-center items-center bg-white border boder-solid border-gray-400"
        onClick={handleAddTodo}
      >
        <IoMdAdd />
      </button>
    </section>
  );
}

export default AddTodo;
