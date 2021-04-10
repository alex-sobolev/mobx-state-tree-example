import { types, getSnapshot, Instance } from 'mobx-state-tree';

export const TodoStore = types
  .model({
    todos: types.optional(types.array(types.string), []),
  })
  .actions(self => ({
    addTodo(todo: string): void {
      self.todos.push(todo);
    },
  }))
  .views(self => ({
    get todosCount(): number {
      return self.todos.length;
    },
  }));

export interface ITodoStore extends Instance<typeof TodoStore> {}
