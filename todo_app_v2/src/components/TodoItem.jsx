import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todosSlice';

function TodoItem({ todo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToDetail = () => {
    navigate(`/detail/${todo.id}`);
  };

  const handleRemoveTodo = (e, id) => {
    dispatch(removeTodo(id));
  };

  return (
    <li className=" flex flex-1 text-4xl justify-between mb-7 border border-solid border-black p-3">
      <p onClick={moveToDetail}>{todo.title}</p>
      <button onClick={(e) => handleRemoveTodo(e, todo.id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}

export default TodoItem;
