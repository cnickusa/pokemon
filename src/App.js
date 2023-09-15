import './App.css';
import Users from './Components/Users/Users/Users';
import AddUser from './Components/Users/AddUser/AddUser';
import Delete from './Components/Users/Delete/Delete';
import Edit from './Components/Users/Edit/Edit';

function App() {
  return (
    <div className="App">
      <Users />
      <AddUser />
      <Delete />
      <Edit />
    </div>
  );
}

export default App;
