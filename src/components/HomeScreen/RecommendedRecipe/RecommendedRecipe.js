import React from 'react';
import './RecommendedRecipe.css';

const RecommendedRecipe = (props) => {
    const handleRecipeClick = () => {
        props.setOpenRecipe(props.recipe);
        props.setRecipeScreenIsOpen(true);
    }

    return (
        <div className="recommendedRecipe" onClick={handleRecipeClick}>
            <h3>{props.recipe.title}</h3>
        </div>
    );

}

export default RecommendedRecipe;