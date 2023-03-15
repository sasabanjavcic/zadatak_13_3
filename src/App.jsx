import "./App.css";
import Klasa from "./components/Klasa";
import Funkcija from "./components/Funkcija";
import Property from "./components/Props";
import Players from "./components/PropTypes";
import { Component } from "react";

// Players za PropTypes
const players = [
  {
    age: 20,
    name: "Mate",
  },
  {
    age: 30,
    name: "Stipe",
  },
];

// Funkcijski
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Klasa />
//         <Funkcija />
//         <Property age={23} />
//       </header>
//     </div>
//   );
// }

// Klasni
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Klasa />
          <Funkcija />
          <Property age={23} />
          <Players age={players[0].age} name={players[0].name} />
          <Players age={players[1].age} name={players[1].name} />
        </header>
      </div>
    );
  }
}

export default App;
