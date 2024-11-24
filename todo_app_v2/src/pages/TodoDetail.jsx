import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditMode from '../components/EditMode';
import ReadMode from '../components/ReadMode';

const TodoDetail = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === Number(id))
  );
  const [clickedEdit, setClickedEdit] = useState(false);

  return (
    <>
      {clickedEdit ? (
        <EditMode
          clickedEdit={clickedEdit}
          setClickedEdit={setClickedEdit}
          todo={todo}
        />
      ) : (
        <ReadMode setClickedEdit={setClickedEdit} todo={todo} />
      )}
    </>
  );
};

export default TodoDetail;
