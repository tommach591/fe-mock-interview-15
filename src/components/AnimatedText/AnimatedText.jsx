import "./AnimatedText.css";
import { useState, useEffect } from "react";

function AnimatedText({ text, animationTime }) {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newList = [...list];
      newList.push(
        <h1
          className="Text"
          key={count}
          style={{ animation: `rightToLeft ${animationTime}s linear` }}
        >
          {text}
        </h1>
      );
      if (newList.length > animationTime) newList.shift();

      setList(newList);
      count < animationTime ? setCount(count + 1) : setCount(0);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [list, count, text, animationTime]);

  return <div className="AnimatedText">{list}</div>;
}

export default AnimatedText;
