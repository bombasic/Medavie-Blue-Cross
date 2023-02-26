import React, { useState, useEffect, useCallback } from "react";
import MealsList from "./components/MealsList";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    const value = document.querySelector(".input").value;
    setError(null);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=348d70bd84da497a88a29806732c08e8&query=${value}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      const transformedData = data.results.map((mealData) => {
        return {
          id: mealData.id,
          title: mealData.title,
          image: mealData.image,
        };
      });
      setMeals(transformedData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  // ! Pagination START
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const nPages = Math.ceil(meals.length / recordsPerPage);

  let content = null;

  if (meals.length > 0) {
    content = (
      <MealsList meals={meals.slice(indexOfFirstRecord, indexOfLastRecord)} />
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }

  useEffect(() => {
    const test = document.querySelector("#input");
    console.log(test);
    test.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.querySelector(".button").click();
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className="text-4xl">Alen Bašić</h1>
        <h2 className="text-2xl">Medavie Blue Cross</h2>
        <h2 className="text-2xl">Recipe Website</h2>
      </div>
      <div className="flex justify-center mt-6">
        <input type="text" className="input border-2" id="input"></input>
        <button onClick={fetchMealsHandler} className="button ml-2" id="button">
          Search
        </button>
      </div>
      <section>{content}</section>

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
}

export default App;
