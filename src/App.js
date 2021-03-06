import troll from './images/troll-face.png';
import Form from './components/Form.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="header--image" src={troll} alt="troll"/>
        <h1 className="header--title">Meme Generator</h1>
        <h4 className="sub--title">React Course - Project 3</h4>
      </header>
      <Form />
    </div>
  );
}

export default App;
