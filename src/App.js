import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users , setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      {
        users.map(user => <ShowUserDetail name = {user.name} Email = {user.email}></ShowUserDetail>)
      }
    </div>
  )
}
function ShowUserDetail(props){
  return(
    <div style={{border: "2px solid red", padding : "20px", margin : "30px"}}>
      <h2>Name : {props.name}</h2>
      <p>Email : {props.Email}</p>
    </div>
  )
}

function Counter(){
  let [count , setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if(count){
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>decrement</button>
    </div>
  )
}
export default App;
