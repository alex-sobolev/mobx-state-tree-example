import React, { FC } from 'react';
import './App.css';
import { MainHeader } from '../MainHeader';
import { Dog } from '../Dog';
import { Todo } from '../Todo';

export const App: FC = () => {
  return (
    <div className="App">
      <MainHeader />
      <main className="MainContent">
        <Todo />
        <Dog />
      </main>
    </div>
  );
};
