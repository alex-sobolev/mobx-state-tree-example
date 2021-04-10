import { types, getSnapshot, Instance } from 'mobx-state-tree';

const dogPath = 'https://dog.ceo/api/breeds/image/random';

export const DogStore = types
  .model('DogStore', {
    dogSrc: types.optional(types.string, ''),
    fetching: types.optional(types.boolean, false),
    error: types.optional(types.maybeNull(types.string), null),
  })
  .actions(self => ({
    setFetching(val: boolean): void {
      self.fetching = val;
    },
    setError(val: string | null) {
      self.error = val;
    },
    setDogSrc(val: string): void {
      self.dogSrc = val;
    },
    async fetchDog(): Promise<void> {
      try {
        this.setFetching(true);

        const response = await fetch(dogPath);
        const data = await response.json();

        this.setFetching(false);
        this.setError(null);
        this.setDogSrc(data.message);
      } catch (err) {
        this.setError(err);
        this.setDogSrc('');
      }
    },
  }));

export interface IDogStore extends Instance<typeof DogStore> {}
