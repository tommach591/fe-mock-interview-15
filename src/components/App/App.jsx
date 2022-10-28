import "./App.css";
import AnimatedText from "../AnimatedText/";

function App() {
  return (
    <div className="App">
      <AnimatedText text={"This is a test..."} animationTime={15} />
    </div>
  );
}

export default App;
