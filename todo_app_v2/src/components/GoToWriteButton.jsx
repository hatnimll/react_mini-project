import { useNavigate } from 'react-router-dom';

function GoToWriteButton() {
  const navigate = useNavigate();

  const moveToWritePage = () => {
    navigate('/write');
  };

  return (
    <button
      className="w-full h-[100px] justify-center items-center bg-white border boder-solid text-3xl"
      onClick={moveToWritePage}
    >
      투두 작성하기
    </button>
  );
}

export default GoToWriteButton;
