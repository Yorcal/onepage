import logo from './images/Logo_Volt.png';
import './App.css';
import CustomNavbar from "./component/navbar.js"

function App() {
  return (<>
    <CustomNavbar></CustomNavbar>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  </>);
}

export default App;
