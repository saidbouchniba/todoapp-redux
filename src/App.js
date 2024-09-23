import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';


function App() {
  return (
    <div style={{textAlign:"center"}} className="App">
      <h1>TODO APP</h1>
     <Taskform />
     <Tasklist/>
    </div>
  );
}

export default App;
