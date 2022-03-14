import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Minus, Plus } from './Redux/action/PlusAction';
// import Store from './Redux/Store';
function App() {
  const state = useSelector(Store => Store.Reducer)
  // console.log(state)
const dispatch = useDispatch()

const plus=_=>{
  dispatch(Plus())
}

const minus =_=>{
  dispatch(Minus())
}


  return (
    <div className="App">

<h1>Counter</h1>
<h1>{state}</h1>

<div className="bx">
<button onClick={plus}>+</button>

<button onClick={minus}>-</button>
</div>
  


    </div>
  );
}

export default App;
