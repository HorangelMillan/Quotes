import Component from "./components/QuoteBox"
import './App.css';
import QuoteBox from "./components/QuoteBox";

function App() {

  return (
    <div className="App">
      <div>
        {QuoteBox()}
      </div>
    </div>
  );
}

export default App;
