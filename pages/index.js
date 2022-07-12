import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');
  const setBtn = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setBtn('Get Punchline');
    });
  };

  return (
    <>
      <button type="button" onClick={getAJoke}>{btnText}</button>
      <h1>{joke.setup}</h1>
    </>
  );
}

export default Home;
