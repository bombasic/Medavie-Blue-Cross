import React, { useState } from "react";

import Details from "./Details";

const Meal = (props) => {
  const [showing, setShowing] = useState(false);

  function showHandler(e) {
    setShowing(!showing);
  }
  return (
    <li onClick={showHandler}>
      <h1 className="text-xl p-2">{props.title}</h1>
      <img
        src={`https://spoonacular.com/recipeImages/${props.id}-240x150.jpg`}
        alt={props.title}
        className="w-full"
      />
      {showing === true && (
        <Details
          key={props.id}
          id={props.id}
          title={props.title}
          image={props.image}
        />
      )}
    </li>
  );
};

export default Meal;
