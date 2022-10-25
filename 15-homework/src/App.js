import './App.css';
import Post from './components/Post';
import teslacoilImg from './assets/tesla-coil.jpg';
import nikolaTeslaImg from './assets/tesla.jpeg';
import elonMuskImg from './assets/musk.jpeg';
import liftoff from './assets/lift-off.jpeg';

function App() {
  return (
    <div className="App">
      <Post
        author={{
          name: 'Nikola Tesla',
          photo: nikolaTeslaImg,
          nickname: '@I am Tesla',
        }}
        content="What we now want is closer contact and better understanding between
          individuals and communities all over the earth, and the elimination
          of egoism and pride which is always prone to plunge the world into
          primeval barbarism and strife... Peace can only come as a natural
          consequence of universal enlightenment."
        image={teslacoilImg}
        date={'October, 25'}
        comments={15334}
        likes={'1,2M '}
        retweets={7777}
        messages={1}
      />

      <Post
        author={{
          name: 'Elon Musk',
          photo: elonMuskImg,
          nickname: '@elonmusk',
        }}
        content="Definitely agree. P.S. Sorry for being badass sometimes. I'm only human after all..."
        image={liftoff}
        date={'October, 25'}
        comments={1334}
        likes={'122k '}
        retweets={536}
        messages={2034}
      />
    </div>
  );
}

export default App;
