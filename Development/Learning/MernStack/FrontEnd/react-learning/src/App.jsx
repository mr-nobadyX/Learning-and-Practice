import { useEffect, useState } from 'react';

const Card = ({ title, rating }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // useEffect to log when the card is liked
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked, title]); // Add dependencies to avoid unnecessary re-renders

  // useEffect(()=>{
  //   console.log("CARD RENDERED");
  // },  []);

  return (
    <div
      className='card'
      onClick={() => setCount((prevState) => prevState + 1)} // Fixed setCount
    >
      <h2>{title} <br /> Clicked: {count || null} times</h2>
      {rating && <p>Rating: {rating}</p>}

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>

    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Interstealer" rating={10} />
      <Card title="WTF" rating={30} />
      <Card title="tenet" rating={20} />
      <h2>Working fine, say hello to React JS</h2>
    </div>
  );
};

export default App;

