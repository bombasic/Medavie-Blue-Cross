import React, { useState, useEffect, useCallback } from "react";

const Details = (props) => {
  const [recipe, setRecipe] = useState([]);
  const fetchRecipiesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=348d70bd84da497a88a29806732c08e8&includeNutrition=true`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      // const transformedRecipe = data.map((recipeData) => {
      //   return {
      //     id: recipeData.id,
      //     instructions: recipeData.instructions,
      //   };
      // });
      setRecipe(data);
      console.log(recipe);
    } catch (error) {}
  }, [props.id, recipe]);

  useEffect(() => {
    fetchRecipiesHandler();
  }, [fetchRecipiesHandler]);

  // TODO Finish Details page, add all required information. (API daily limit exceeded?)

  return (
    <div className="absolute h-screen w-screen left-0 right-0 top-0 bottom-0 m-auto">
      <div className="absolute h-4/5 w-4/5 bg-slate-400 left-0 right-0 top-0 bottom-0 m-auto">
        <h2>{props.title}</h2>
        <img
          src={`https://spoonacular.com/recipeImages/${props.id}-240x150.jpg`}
          alt={props.title}
          className="w-full"
        />
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Details;
