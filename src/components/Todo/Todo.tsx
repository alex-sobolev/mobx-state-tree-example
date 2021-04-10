import React, { FC } from 'react';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export const Todo: FC = () => (
  <div>
    <TodoHeader />
    <TodoList />
    <TodoForm />
  </div>
);
