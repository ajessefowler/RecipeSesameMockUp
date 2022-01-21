import React from 'react';

const RecommendedRecipe = (props) => {
    return (
        <div className="recommendedRecipe">
            <h3>{props.name}</h3>
        </div>
    );

}

export default RecommendedRecipe;