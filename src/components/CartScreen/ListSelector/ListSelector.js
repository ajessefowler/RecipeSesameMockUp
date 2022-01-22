import React from "react";

const ListSelector = (props) => {
    const handleIngredientClick = () => {
        props.setDisplayIngredients(true);
    }

    const handleRecipeClick = () => {
        props.setDisplayIngredients(false);
    }

    return (
        <div className="listSelector">
            {props.displayIngredients ? (<h3 className="ingredients selected" onClick={handleIngredientClick}>Ingredients</h3>) : (<h3 className="ingredients unselected" onClick={handleIngredientClick}>Ingredients</h3>) }
            {props.displayIngredients ? (<h3 className="recipes unselected" onClick={handleRecipeClick}>Recipes</h3>) : (<h3 className="recipes selected" onClick={handleRecipeClick}>Recipes</h3>) }
        </div>
    );
}

export default ListSelector;