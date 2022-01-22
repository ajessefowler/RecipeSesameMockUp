import React from "react";
import RecipeDescription from "../RecipeDescription/RecipeDescription";
import RecipeHeader from "../RecipeHeader/RecipeHeader";
import RecipeControls from "../RecipeControls/RecipeControls";

const RecipeContainer = (props) => {
    // Hardcoded for now, will be passed as prop
    const recipeDescription = "1.5 lb Chicken tenders\n1 cup Greek yogurt\nJuice of 1 large lemon\n2 tbsp Greek extra virgin olive oil\n2 tbsp red wine vinegar\n3 garlic cloves, minced\nKosher salt, generous pinch to taste\nBlack pepper, generous pinch to taste\n1 tbsp oregano\n1 tsp sweet paprika\n1 tsp ground cumin\n1 tsp ground coriander\nPinch cayenne pepper, optional\nCook the chicken for 3 hours on high heat. Then, add everything into a bowl and mix aggressively. Then bake it all for another 4 hours at 600 degrees. Careful, it will be hot. Ensure your smoke detectors are working before attempting to use this recipe. After removing it from the oven, throw it in the trash and try making something else using a real recipe. I'm just adding more words so I can test the scrolling of this text box. It seems to work well but I need a lot of text to test it on wider screens. That wasn't even enough to work, so here's a little more to make this recipe a lot longer.".split('\n');

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