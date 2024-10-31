import { createContext, useContext, useEffect, useState } from 'react';

const todosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <todosContext.Provider value={{ todos, setTodos }}>
      {children}
    </todosContext.Provider>
  );
}
export function useTodos() {
  return useContext(todosContext);
}
