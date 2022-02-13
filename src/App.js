import { useState } from 'react';
import './App.css';
import Logo from './components/HomeScreen/Logo/Logo';
import Chatbox from './components/HomeScreen/Chatbox/Chatbox';
import RecommendedContainer from './components/HomeScreen/RecommendedContainer/RecommendedContainer';
import CartButton from './components/HomeScreen/CartButton/CartButton';
import RecipeContainer from './components/RecipeScreen/RecipeContainer/RecipeContainer';
import CartContainer from './components/CartScreen/CartContainer/CartContainer';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [numberOfMessagesSent, setNumberOfMessagesSent] = useState(0);

  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  const [recipeScreenIsOpen, setRecipeScreenIsOpen] = useState(false);
  const [openRecipe, setOpenRecipe] = useState({});

  const [cartScreenIsOpen, setCartScreenIsOpen] = useState(false);
  const [cartContents, setCartContents] = useState(["1.5 lbs chicken tenders", "4 tbsp extra virgin olive oil", "1 cup Greek yogurt", "1 large lemon", "2 tbsp red wine vinegar", "3 garlic gloves", "kosher salt", "black pepper", "1 tbsp oregano", "1 tsp sweet paprika", "1 tsp ground cumin", "1 tsp ground coriander"]);

  const randomUrl = 'http://localhost:8000/random/';

  useEffect(() => {
    fetch(randomUrl)
      .then(response => response.json())
      .then(data => setRecommendedRecipes(data));
  }, [])

  return (
    <div className="App">
      <div className="header">
        <Logo />
        <CartButton 
          setCartScreenIsOpen={setCartScreenIsOpen}
        />
      </div>
      <div className="mainContainer">
        <div className="container chatContainer">
          <h2>Chat with Sesame</h2>
          <Chatbox 
            numberOfMessagesSent={numberOfMessagesSent} 
            setNumberOfMessagesSent={setNumberOfMessagesSent}
            setRecommendedRecipes={setRecommendedRecipes}
          />
        </div>
        
        <RecommendedContainer
          setCartContents={setCartContents} 
          setOpenRecipe={setOpenRecipe}
          setRecipeScreenIsOpen={setRecipeScreenIsOpen}
          numberOfMessagesSent={numberOfMessagesSent} 
          recommendedRecipes={recommendedRecipes}
          setRecommendedRecipes={setRecommendedRecipes}
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
