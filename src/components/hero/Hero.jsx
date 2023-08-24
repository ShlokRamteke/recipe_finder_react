import React from "react";
import classes from "./hero.module.css";
import meal from "../../assets/meal4.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const URL1 = "https://www.themealdb.com/api/json/v1/1//lookup.php?i=53064";
  const URL2 = "https://www.themealdb.com/api/json/v1/1//lookup.php?i=52914";
  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burgerRecipe, setBurgerRecipe] = useState("");

  useEffect(() => {
    const fetchChickenRecipe = async () => {
      try {
        const res = await fetch(URL1);
        const data = await res.json();

        setChickenRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChickenRecipe();
  }, []);

  useEffect(() => {
    const fetchBurgerRecipe = async () => {
      try {
        const res = await fetch(URL2);
        const data = await res.json();
        setBurgerRecipe(data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBurgerRecipe();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Delightful Dishes: <br />
            Unleash Culinary Creativity with <br />
            Our Recipe Sharing App!
          </h2>
          <h5>
            Discover, Create, and Share the
            <br /> Most Delectable Recipes in One Place
          </h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some tasty recipes
          </p>

          <div className={classes.buttons}>
            <button>
              <NavLink to={"/categories"} style={{ textDecoration: "none" }}>
                Explore recipes
              </NavLink>
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={meal} />
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burgerRecipe?.strMealThumb} />
            </div>
            <h5>{burgerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
