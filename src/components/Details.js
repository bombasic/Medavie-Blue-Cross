import React from "react";

const Details = (props) => {
  return (
    <div className="absolute h-screen w-screen left-0 right-0 top-0 bottom-0 m-auto">
      <div className="absolute h-4/5 w-4/5 bg-slate-400 left-0 right-0 top-0 bottom-0 m-auto">
        <h2>{props.title}</h2>
        <img
          src={`https://spoonacular.com/recipeImages/${props.id}-240x150.jpg`}
          alt={props.title}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Details;
