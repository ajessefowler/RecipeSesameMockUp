import React, { useState, useEffect } from 'react';
import RecommendedRecipe from '../RecommendedRecipe/RecommendedRecipe';
import './RecommendedContainer.css';

const RecommendedContainer = (props) => {
    useEffect(() => {
        console.log(props.recommendedRecipes);
    }, [props.recommendedRecipes]);

    // Recipes will have {ingredients, instructions, picture_link, and title}

    return (
        <div className="recommendedContainer">
            <h2>Suggested Recipes</h2>
            <div className="recommendedScroll">
                { props.recommendedRecipes.map((recipe, index) => (
                    <RecommendedRecipe 
                        key={index} 
                        name={recipe.title} 
                        setRecipeScreenIsOpen={props.setRecipeScreenIsOpen} 
                        setOpenRecipe={props.setOpenRecipe}
                    />
                )) }
            </div>
        </div>
    );

}

export default RecommendedContainer;