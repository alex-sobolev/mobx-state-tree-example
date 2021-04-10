import React, { FC, createContext, useContext } from 'react';
import { types, getSnapshot, Instance } from 'mobx-state-tree';
import { IDogStore, DogStore } from './DogStore';
import { TodoStore } from './TodoStore';

const RootStore = types.model('RootStore', {
  dogStore: DogStore,
  todoStore: TodoStore,
});

export interface IRootStoreModel extends Instance<typeof RootStore> {}

const createRootStore = (): IRootStoreModel => {
  const dogStore = DogStore.create();
  const todoStore = TodoStore.create();

  return RootStore.create({ dogStore, todoStore });
};

export const StoreContext = createContext<IRootStoreModel>({} as IRootStoreModel);

export const StoreProvider: FC = ({ children }) => {
  const rootStore = createRootStore();

  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
  return useContext(StoreContext);
};
