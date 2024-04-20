// import logo from './logo.svg';
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import ServicesScreen from "./screens/ServicesScreen/ServicesScreen";
import SkillScreen from "./screens/SkillsScreen/SkillScreen";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <Example />
      <div>
        <HomeScreen />
        <AboutScreen />
        <ServicesScreen />
        <SkillScreen />
      </div>
    </div>
  );
}

export default App;
