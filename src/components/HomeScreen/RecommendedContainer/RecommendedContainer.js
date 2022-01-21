import React, { useState, useEffect } from 'react';
import RecommendedRecipe from '../RecommendedRecipe/RecommendedRecipe';

const RecommendedContainer = (props) => {
    const [currentRecipes, setCurrentRecipes] = useState(props.first);

    useEffect(() => {
        if (props.numberOfMessagesSent === 0) {
            setCurrentRecipes(props.first);
        } else if (props.numberOfMessagesSent === 1) {
            setCurrentRecipes(props.second);
        } else if (props.numberOfMessagesSent === 2) {
            setCurrentRecipes(props.third);
        }
    }, [props.first, props.second, props.third, props.numberOfMessagesSent]);

    return (
        <div className="recommendedContainer">
            <h2>Recommended Recipes</h2>
            <div className="recommendedScroll">
                { currentRecipes.map((recipe, index) => (
                    <RecommendedRecipe 
                        key={index} 
                        name={recipe.name} 
                        setRecipeScreenIsOpen={props.setRecipeScreenIsOpen} 
                        setOpenRecipe={props.setOpenRecipe}
                    />
                )) }
            </div>
        </div>
    );

}

export default RecommendedContainer;