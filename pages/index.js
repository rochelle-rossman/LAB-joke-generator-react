import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';

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
    <>
      <Button type="button" onClick={getAJoke}>
        {btnText}
      </Button>
      <h1>{joke.setup}</h1>
      <h4>{btnText === 'Get Another Joke' ? joke.delivery : ''}</h4>
    </>
  );
}

export default Home;
