import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Picker from './components/Picker';
import Comm from './components/Comm';

function App() {
  return (
  <div className="App">
  <AppBar/>
  <br/>
  <Banner/>
  <br/>
  <Menu/>
  <Picker/>
  <Comm/>
  <div className='text-center my-3 text-danger small'>
   Copyright 2023 - 2024
  </div>
  </div>

)
}
    
    


export default App;
