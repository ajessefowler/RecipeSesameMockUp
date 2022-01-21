import { useState } from 'react';
import './App.css';
import Logo from './components/HomeScreen/Logo/Logo';
import Chatbox from './components/HomeScreen/Chatbox/Chatbox';
import RecommendedContainer from './components/HomeScreen/RecommendedContainer/RecommendedContainer';
import ShoppingCartButton from './components/HomeScreen/ShoppingCartButton/ShoppingCartButton';

function App() {
  const [numberOfMessagesSent, setNumberOfMessagesSent] = useState(0);

  const firstRecipes = [{name: "PB&J"}, {name: "Spaghetti"}, {name: "Fried Chicken"}];
  const secondRecipes = [{name: "Vegan Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}, {name: "Homemade Greek Salad"}];
  const thirdRecipes = [{name: "Homemade Greek Chicken Gyro"}, {name: "Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}];

  return (
    <div className="App">
      <Logo />
      <ShoppingCartButton />
      <div className="mainContainer">
        <Chatbox numberOfMessagesSent={numberOfMessagesSent} setNumberOfMessagesSent={setNumberOfMessagesSent}/>
        <RecommendedContainer 
          numberOfMessagesSent={numberOfMessagesSent} 
          first={firstRecipes} 
          second={secondRecipes}
          third={thirdRecipes}
        />
      </div>
    </div>
  );
}

export default App;
