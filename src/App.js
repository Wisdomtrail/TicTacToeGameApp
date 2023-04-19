// import logo from './logo.svg';
import './App.css';
import TopNav from './pages/dashboard/componenent/topNav';
import Hero from './pages/dashboard/componenent/Hero';
import Class from './pages/dashboard/componenent/ClassWork';
import Footer from './pages/dashboard/componenent/Footer';
import Frag from './pages/dashboard/componenent/Fragment';
import TicTacToe from './pages/dashboard/componenent/TicTacToe';
function App() {
  return (
    <div className="App">
      {/* <TopNav/>
      <Hero/>  */} 
     {/* <Footer/>
      <Frag/> */}
      {/* <Class/> */}
      <TicTacToe/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }
    </div>
  );
}

export default App;