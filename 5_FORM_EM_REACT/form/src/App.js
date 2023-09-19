import './App.css';
import MyForm from './components/MyForm';
import './components/MyForm.css'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Irving Paim", email: "irving.ba.drd21@hotmail.com", bio: "Programador", role: "admin" }} />
    </div>
  );
}

export default App;
