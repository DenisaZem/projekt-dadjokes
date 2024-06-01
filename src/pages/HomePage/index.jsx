import Joke from "../../components/Joke";
import "./style.css";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [oneJoke, setOneJoke] = useState([]);

  useEffect(() => {
    const jokes = async () => {
      const response = await fetch("http://localhost:4000/api/joke");
      const data = await response.json();
      const oneJokeData = data.data;
      setOneJoke(oneJokeData);
    };
    jokes();
  }, []);

  return (
    <div className="container">
      {oneJoke.map((item) => {
        return (
          <Joke
            key={item.id}
            userAvatar={item.avatar}
            userName={item.name}
            text={item.text}
            likes={item.likes}
            dislikes={item.dislikes}
          />
        );
      })}
    </div>
  );
};
