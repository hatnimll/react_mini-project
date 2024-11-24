import React from 'react';
const ReadMode = ({ setClickedEdit, todo }) => {
  const handleClickEdit = () => {
    setClickedEdit(true);
  };

  return (
    <>
      <div className="w-full h-3/5 border-t px-16 bg-white flex flex-col justify-around">
        <p className="border border-solid border-black h-[60px] px-5 text-xl flex items-center">
          {todo.title}
        </p>
        <p className="border border-solid border-black h-[300px] p-5 text-xl text-start ">
          {todo.content}
        </p>
      </div>
      <button
        onClick={handleClickEdit}
        className="w-full h-[100px] justify-center items-center bg-white border boder-solid text-3xl"
      >
        수정하기
      </button>
    </>
  );
};

export default ReadMode;
