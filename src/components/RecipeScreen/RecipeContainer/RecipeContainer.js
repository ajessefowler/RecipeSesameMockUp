import React from "react";
import RecipeDescription from "../RecipeDescription/RecipeDescription";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeControls from "../RecipeControls/RecipeControls";

const RecipeContainer = (props) => {
    // Hardcoded for now, will be passed as prop
    const recipeDescription = "For the Chicken\n1.5 lb Chicken tenders\nExtra virgin olive oil for the pan\nFor the Chicken Gyro Marinade\n1 cup Greek yogurt (you can use reduced fat or fat free Greek yogurt if you like)\nJuice of 1 large lemon\n2 tbsp Greek extra virgin olive oil (try Private Reserve Greek EVOO)\n2 tbsp red wine vinegar\n3 garlic cloves, minced\nKosher salt, generous pinch to taste\nBlack pepper, generous pinch to taste\n1 tbsp oregano\n1 tsp sweet paprika\n1 tsp ground cumin\n1 tsp ground coriander\nPinch cayenne pepper, optional\nCook the chicken for 3 hours on high heat. Then, add everything into a bowl and mix aggressively. Then bake it all for another 4 hours at 600 degrees. Careful, it will be hot. After removing it, throw it in the trash and try making something else. Honestly I'm just adding more words so I can test the scrolling.".split('\n');

    const closeRecipeScreen = () => {
        props.setRecipeScreenIsOpen(false);
    }

    return (
        <div className="recipeContainer">
            <div className="recipeCard">
                <RecipeHeader recipeName={props.openRecipe} closeRecipeScreen={closeRecipeScreen}/>
                <div className="recipeContent">
                    <RecipeDescription description={recipeDescription} />
                    <RecipeControls cartContents={props.cartContents}/>
                </div>
            </div>
        </div>
    );
}

export default RecipeContainer;