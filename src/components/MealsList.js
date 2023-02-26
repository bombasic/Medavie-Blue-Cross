import React, { useState } from "react";

import Meal from "./Meal";

const MealList = (props) => {
  return (
    <ul className="flex justify-center gap-6 mt-6 cursor-pointer">
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
