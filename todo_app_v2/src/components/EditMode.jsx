import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/todosSlice';

const EditMode = ({ clickedEdit, setClickedEdit, todo }) => {
  const [editTitle, setEditTitle] = useState(`${todo.title}`);
  const [editContent, setEditContent] = useState(`${todo.content}`);
  const titleInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clickedEdit && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [clickedEdit]);

  const handleClickSave = () => {
    dispatch(editTodo({ id: todo.id, title: editTitle, content: editContent }));
    setClickedEdit(false);
  };

  return (
    <>
      <div className="w-full h-3/5 border-t px-16 bg-white flex flex-col justify-around">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="border border-solid border-black h-[60px] px-5 text-xl flex items-center text-gray-600"
          ref={titleInputRef}
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="border border-solid border-black h-[300px] p-5 text-xl text-start text-gray-600"
        />
      </div>
      <button
        onClick={handleClickSave}
        className="w-full h-[100px] justify-center items-center bg-white border boder-solid text-3xl"
      >
        저장하기
      </button>
    </>
  );
};

export default EditMode;
