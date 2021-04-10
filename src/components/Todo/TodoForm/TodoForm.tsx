import React, { useState } from 'react';
import { useRootStore } from '../../../stores';

export const TodoForm = () => {
  const { todoStore } = useRootStore();
  const [todo, setTodo] = useState('');

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    if (!todo) {
      return;
    }

    todoStore.addTodo(todo);
    setTodo('');
  };

  const onTodoTyping: React.ChangeEventHandler<HTMLInputElement> = event => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={todo} onChange={onTodoTyping} placeholder="Enter a todo"></input>
      <button type="submit">Add todo</button>
    </form>
  );
};
