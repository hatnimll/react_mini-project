import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddTodo = () => {
    if (title && content) {
      dispatch(
        addTodo({
          id: Date.now(),
          title,
          content,
        })
      );
      setTitle('');
      setContent('');
      navigate('/');
    }
  };

  return (
    <>
      <div className="w-full h-3/5 border-t px-16 bg-white flex flex-col justify-around">
        <input
          type="text"
          value={title}
          placeholder="할 일을 입력하세요"
          onChange={handleTitleChange}
          className="border border-solid border-black h-[60px] px-5 text-xl"
        />
        <textarea
          value={content}
          placeholder="메모할 내용을 적어주세요"
          onChange={handleContentChange}
          className="border border-solid border-black h-[300px] p-5 text-xl text-start"
        />
      </div>
      <button
        onClick={handleAddTodo}
        className="w-full h-[100px] justify-center items-center bg-white border boder-solid text-3xl"
      >
        추가하기
      </button>
    </>
  );
};

export default Write;
