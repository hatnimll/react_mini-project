import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import TodoDetail from './pages/TodoDetail';
import Write from './pages/Write';
import { FaHome } from 'react-icons/fa';

function App() {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-around bg-[#F8F8FF] w-2/5 mx-auto px-8 min-w-[200px] h-[75vh] rounded-lg ">
      <header className="relative w-full">
        <h1 className="text-7xl my-7 text-center">Todo List</h1>
        <button
          className="absolute top-[10px] right-0 text-4xl"
          onClick={moveToHome}
        >
          <FaHome />
        </button>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
