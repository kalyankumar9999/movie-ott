import "./App.css";
import "./global.css";
import ButtonComponent from "./components/buttonComponent";
import InputComponent from "./components/inputComponent";

function App() {
  return (
    <>
      <h1>Movie-OTT</h1>

      {/* <InputComponent
        customLabel="Email"
        customPlaceHolder="Email"
        customInputType="email"
      />
      <InputComponent
        customLabel="Password"
        customPlaceHolder="Password"
        customInputType="password"
      /> */}
      <ButtonComponent buttonText="Sign In" backgroundColor="#BB261A" />
      <ButtonComponent buttonText="Sign Up" backgroundColor="#AFB2B9" />
    </>
  );
}

export default App;
