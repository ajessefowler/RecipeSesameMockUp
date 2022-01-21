import React from "react";
import RecipeDescription from "../RecipeDescription/RecipeDescription";
import RecipeHeader from "../RecipeHeader/RecipeHeader";

const RecipeContainer = (props) => {
    // Hardcoded for now, will be passed as prop
    const recipeDescription = "For the Chicken\n1.5 lb Chicken tenders\nExtra virgin olive oil for the pan\nFor the Chicken Gyro Marinade\n1 cup Greek yogurt (you can use reduced fat or fat free Greek yogurt if you like)\nJuice of 1 large lemon\n2 tbsp Greek extra virgin olive oil (try Private Reserve Greek EVOO\n2 tbsp red wine vinegar\n3 garlic cloves, minced\nKosher salt, generous pinch to taste\nBlack pepper, generous pinch to taste\n1 tbsp oregano\n1 tsp sweet paprika\n1 tsp ground cumin\n1 tsp ground coriander\npinch cayenne pepper, optional"

    const closeRecipeScreen = () => {
        props.setRecipeScreenIsOpen(false);
    }

    return (
        <div className="recipeContainer" onClick={closeRecipeScreen}>
            <div className="recipeContent">
                <RecipeHeader recipeName={props.openRecipe} />
                <RecipeDescription description={recipeDescription} />
            </div>
        </div>
    );
}

export default RecipeContainer;