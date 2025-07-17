import './App.css';
import {User} from './User'

function App() {
  const age = 16;
  const isGreen = true;
  const addButton = true;
  // const names = ["Ken", "Chase", "Kesh", "Ethan"];
  const users = [
    {name: "Ken", age: 18, email: "ken@ttt.com"},
    {name: "Chase", age: 12, email: "chase@ttt.com"},
    {name: "Kesh", age: 11, email: "kesh@ttt.com"},
    {name: "Ethan", age: 11, email: "ethan@ttt.com"}
  ];
  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} email={user.email}/>;
      })}
   
      {age >= 18 ? <h1>OVERAGE</h1> : <h1>UNDERAGE</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}> THIS HAS COLOUR</h1>
      {addButton && <button>PUSH ME</button>}
    </div>
  );
}

export default App;
