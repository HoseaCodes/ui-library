import './App.css';
import Logo from './components/logo';
import Nav from './components/nav';
import Social from './components/soical';
import './components/components.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Nav />
        <Social />
      </header>
    </div>
  );
}

export default App;
