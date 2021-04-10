import React from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from '../../../stores';

export const TodoList = () => {
  const { todoStore } = useRootStore();

  return useObserver(() => (
    <div>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={`todo-${index}`}>{todo}</li>
        ))}
      </ul>
    </div>
  ));
};
