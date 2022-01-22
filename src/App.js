import { useState } from 'react';
import './App.css';
import Logo from './components/HomeScreen/Logo/Logo';
import Chatbox from './components/HomeScreen/Chatbox/Chatbox';
import RecommendedContainer from './components/HomeScreen/RecommendedContainer/RecommendedContainer';
import CartButton from './components/HomeScreen/CartButton/CartButton';
import RecipeContainer from './components/RecipeScreen/RecipeContainer/RecipeContainer';
import CartContainer from './components/CartScreen/CartContainer/CartContainer';

function App() {
  const [numberOfMessagesSent, setNumberOfMessagesSent] = useState(0);

  const [recipeScreenIsOpen, setRecipeScreenIsOpen] = useState(false);
  const [openRecipe, setOpenRecipe] = useState({});

  const [cartScreenIsOpen, setCartScreenIsOpen] = useState(false);
  const [cartContents, setCartContents] = useState(["1.5 lbs chicken tenders", "4 tbsp extra virgin olive oil", "1 cup Greek yogurt", "1 large lemon", "2 tbsp red wine vinegar", "3 garlic gloves", "kosher salt", "black pepper", "1 tbsp oregano", "1 tsp sweet paprika", "1 tsp ground cumin", "1 tsp ground coriander"]);

  const firstRecipes = [{name: "PB&J"}, {name: "Spaghetti"}, {name: "Fried Chicken"}];
  const secondRecipes = [{name: "Vegan Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}, {name: "Homemade Greek Salad"}];
  const thirdRecipes = [{name: "Homemade Greek Chicken Gyro"}, {name: "Greek Meatballs"}, {name: "Greek Chicken Souvlaki"}];

  return (
    <div className="App">
      <Logo />
      <CartButton 
        setCartScreenIsOpen={setCartScreenIsOpen}
      />
      <div className="mainContainer">
        <Chatbox 
          numberOfMessagesSent={numberOfMessagesSent} 
          setNumberOfMessagesSent={setNumberOfMessagesSent}
        />
        <RecommendedContainer
          setCartContents={setCartContents} 
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
          cartContents={cartContents}
        /> 
      : null }

      { cartScreenIsOpen ?
        <CartContainer 
          setCartScreenIsOpen={setCartScreenIsOpen}
          cartContents={cartContents}
        />
      : null }
    </div>
  );
}

export default App;
