import React from 'react';
import getJoke from '../api/jokeData';

export default function GetJokeBtn() {
  const handleClick = () => {
    getJoke().then((joke) => console.warn(joke.setup));
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Get Joke
      </button>
    </>
  );
}
