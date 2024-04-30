/* eslint-disable no-unused-vars */
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Actions';

const store = configureStore({
  reducer: reducer
});

const LikeCounter = () => {
  const { likeCount } = store.getState();

  return (
    <div className="like-counter">
      <h2>Like Counter: {likeCount}</h2>
      <button className="like-button" onClick={() => store.dispatch(incrementLike())}>Like</button>
      <button className="unlike-button" onClick={() => store.dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
