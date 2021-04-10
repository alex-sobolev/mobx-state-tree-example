import React, { FC, useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from '../../stores';
import './Dog.css';

export const Dog: FC = () => {
  const { dogStore } = useRootStore();

  useEffect(() => {
    dogStore.fetchDog();
  }, []);

  const getDog = () => {
    dogStore.fetchDog();
  };

  return useObserver(() => (
    <div className="Dog">
      <div className="DogView">
        {dogStore.fetching ? (
          <div className="DogLoading">Loading...</div>
        ) : dogStore.error ? (
          <div>Couldn't fetch a dog. Try again!</div>
        ) : (
          <div>
            <img src={dogStore.dogSrc} className="DogImage" />
          </div>
        )}
      </div>
      <div className="DogControls">
        <button onClick={getDog} disabled={dogStore.fetching}>
          Get a dog!
        </button>
      </div>
    </div>
  ));
};
