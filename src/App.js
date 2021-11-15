import Home from './component/Home';
import Header from './component/Header';
import './App.css';
import Figure from './component/Figure';

function App() {
  return (
    <>
      <Header />

      <Home />

      <div className= "game-container">    
        <Figure />
      </div>
    </>
  );
}

export default App;
