import "./App.css";
import InputComponent from "./components/inputComponent";

function App() {
  return (
    <>
      <h1>Movie-OTT</h1>

      <InputComponent customLabel="Email" customPlaceHolder="Email" customInputType="email"/>
      <InputComponent customLabel="Password" customPlaceHolder="Password" customInputType="password"/>
    </>
  );
}

export default App;
