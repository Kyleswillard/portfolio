import './App.css';
import Icons from './components/langs';
import Title from './components/title';
import Intro from './components/paras';
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Icons />
        <Intro />
        <Contact/>
      </header>
    </div>
  );
}

export default App;
