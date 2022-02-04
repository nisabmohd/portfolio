import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
// import { Profile } from './Profile';
// import { Projects } from './Projects';
import { Terminal } from './Terminal';
function App() {
  return (
    <div className="App">
      <Header/>
     <Terminal/>
     {/* <Projects/> */}
     {/* <Profile/> */}
     <Footer></Footer>
    </div>
  );
}

export default App;
