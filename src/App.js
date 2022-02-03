import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Text from "./components/Text";
import TextList from "./components/TextList";
import {toggle,Reset} from "./JS/actions/actionsCounter"

function App() {
  const show=useSelector(state=>state.isVisible)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>Workshop redux</h1>
      <button onClick={()=>{dispatch(toggle());dispatch(Reset())}}>{show?"Hide":"Show"}</button>
      {show&&<Counter />}
      <TextList />
    </div>
  );
}

export default App;
