export const loadStorage = () => {
  try {
    const loadTodos = localStorage.getItem('todos');
    return loadTodos ? JSON.parse(loadTodos) : [];
  } catch (error) {
    console.error('로컬 스토리지에서 할 일을 가져오는데 실패:', error);
    return [];
  }
};

export const updateStorage = (todos) => {
  try {
    const updateTodos = JSON.stringify(todos);
    localStorage.setItem('todos', updateTodos);
  } catch (error) {
    console.error('로컬 스토리지에 할 일 업데이트 실패:', error);
  }
};
