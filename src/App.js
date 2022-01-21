import { useState } from 'react';
import './App.css';
import Logo from './components/HomeScreen/Logo/Logo';
import Chatbox from './components/HomeScreen/Chatbox/Chatbox';
import RecommendedContainer from './components/HomeScreen/RecommendedContainer/RecommendedContainer';
import ShoppingCartButton from './components/HomeScreen/ShoppingCartButton/ShoppingCartButton';
import RecipeContainer from './components/RecipeContainer/RecipeContainer';
import ShoppingCartContainer from './components/ShoppingCartContainer/ShoppingCartContainer';

function App() {
  const [numberOfMessagesSent, setNumberOfMessagesSent] = useState(0);

  const [recipeScreenIsOpen, setRecipeScreenIsOpen] = useState(false);
  const [openRecipe, setOpenRecipe] = useState({});

  const [cartScreenIsOpen, setCartScreenIsOpen] = useState(false);
  //const [cartContents, setCartContents] = useState({});

  const firstRecipes = [{name: "PB&J"}, {name: "Spaghetti"}, {name: "Fried Chicken"}];
  const secondRecipes = [{name: "Vegan Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}, {name: "Homemade Greek Salad"}];
  const thirdRecipes = [{name: "Homemade Greek Chicken Gyro"}, {name: "Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}];

  return (
    <div className="App">
      <Logo />
      <ShoppingCartButton 
        setCartScreenIsOpen={setCartScreenIsOpen}
      />
      <div className="mainContainer">
        <Chatbox 
          numberOfMessagesSent={numberOfMessagesSent} 
          setNumberOfMessagesSent={setNumberOfMessagesSent}
        />
        <RecommendedContainer 
          setOpenRecipe={setOpenRecipe}
          setRecipeScreenIsOpen={setRecipeScreenIsOpen}
          numberOfMessagesSent={numberOfMessagesSent} 
          first={firstRecipes} 
          second={secondRecipes}
          third={thirdRecipes}
        />
      </div>

      { recipeScreenIsOpen ? 
        <RecipeContainer 
          openRecipe={openRecipe} 
          setRecipeScreenIsOpen={setRecipeScreenIsOpen}
        /> 
      : null }

      { cartScreenIsOpen ?
        <ShoppingCartContainer 
          setCartScreenIsOpen={setCartScreenIsOpen}
        />
      : null }
    </div>
  );
}

export default App;
