import logo from "./Logo.svg";
import "./App.css";

function App() {
  const test = () => {
    console.log("test");
  };
  return (
    <div className="App">
      <div className="login__header">
        <div className="login__logo">
          <img src={logo} alt="" />
        </div>
        <div className="login__header_text">
          <h1>MUSIC APP</h1>
          <h2>Every song at your finger tips.</h2>
          <div className="login__button" onClick={test}>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
