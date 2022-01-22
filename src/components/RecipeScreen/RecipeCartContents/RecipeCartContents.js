import React from "react";

const RecipeCartContents = (props) => {
    return props.addClicked ? ( 
        <div className="recipeCartContents">
            { props.cartContents.map((item, index) => (
                <p>{item}</p>
            )) }
        </div>
    ) : (
        <div className="recipeCartContents">
            <p>Your basket is empty.</p>
        </div>
    );
}

export default RecipeCartContents;