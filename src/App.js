import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Navigator from './Navigator';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Home />
    </div>
  );
}

export default App;
