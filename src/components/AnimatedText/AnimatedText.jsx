import "./AnimatedText.css";
import Text from "../Text";
import { useState, useEffect } from "react";

function AnimatedText({ text }) {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let newList = [...list];
    newList.push(<Text key={count} text={text + 0} />);
    setList(newList);
    setCount(count + 1);
  }, []);

  useEffect(() => {
    let pop = () => {
      let newList = [...list];
      newList.shift();
      setList(newList);
    };

    const interval = setInterval(() => {
      let newList = [...list];
      newList.push(<Text key={count} text={text + newList.length} />);
      setList(newList);
      setCount(count + 1);
    }, 1000);

    //window.addEventListener("animationend", pop);

    return () => {
      clearInterval(interval);
      //window.removeEventListener("animationend", pop);
    };
  }, [list, count, text]);

  return <div className="AnimatedText">{list}</div>;
}

export default AnimatedText;
