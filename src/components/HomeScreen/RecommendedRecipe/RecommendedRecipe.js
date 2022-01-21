import React from 'react';

const RecommendedRecipe = (props) => {
    const handleRecipeClick = () => {
        props.setOpenRecipe(props.name);
        props.setRecipeScreenIsOpen(true);
    }

    return (
        <div className="recommendedRecipe" onClick={handleRecipeClick}>
            <h3>{props.name}</h3>
        </div>
    );

}

export default RecommendedRecipe;