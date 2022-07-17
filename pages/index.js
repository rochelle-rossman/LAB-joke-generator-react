import { useState } from 'react';
import getJoke from '../api/jokeData';
import NetworkError from '../components/NetworkError';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const getAJoke = () => {
    if (btnText === 'Get A Joke' || btnText === 'Get Another Joke') {
      getJoke().then(setJoke);

      setBtnText('Get Punchline');
    } else if (btnText === 'Get Punchline') {
      setBtnText('Get Another Joke');
    }
  };

  return (
    joke.error ? <NetworkError />
      : (
        <div className="joke-container d-flex flex-column justify-content-center align-content-center">
          <button type="button" className="button-53" onClick={getAJoke}>
            {btnText}
          </button>
          <h1>{joke.setup}</h1>
          <h4>{btnText === 'Get Another Joke' ? joke.delivery : ''}</h4>
        </div>
      )
  );
}

export default Home;
