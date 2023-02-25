import React from "react";

const Meal = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <img
        src={`https://spoonacular.com/recipeImages/${props.id}-240x150.jpg`}
        alt={props.title}
      />
    </li>
  );
};

export default Meal;
