import React from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from '../../../stores';
import './TodoHeader.css';

export const TodoHeader = () => {
  const { todoStore } = useRootStore();

  return useObserver(() => (
    <header className="TodoHeader">
      <span className="TodoHeader-count">{todoStore.todosCount}</span> Todos:
    </header>
  ));
};
