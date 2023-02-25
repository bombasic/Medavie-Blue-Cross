import React from "react";

import Meal from "./Meal";

const MealList = (props) => {
  return (
    <ul class="flex gap-6 mt-6">
      {props.meals.map((meal) => (
        <Meal
          key={meal.id}
          id={meal.id}
          title={meal.title}
          image={meal.image}
        />
      ))}
    </ul>
  );
};

export default MealList;
