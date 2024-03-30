// import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ServicesScreen from './screens/ServicesScreen/ServicesScreen';

function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <AboutScreen/>
      <ServicesScreen/>
    </div>
  );
}

export default App;
