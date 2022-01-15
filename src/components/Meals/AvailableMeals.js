import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Ultimate Cheesburger",
    description: "Finest fish and veggies",
    price: 22.99,
    picture: "https://media.zelty.fr/images/642/cd7a1.jpg",
  },
  {
    id: "m2",
    name: "The Blue & Steak Burger",
    description: "A german specialty!",
    price: 16.5,
    picture: "https://media.zelty.fr/images/642/e7151.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    picture: "https://media.zelty.fr/images/642/3ece1.jpg",
  },
  {
    id: "m4",
    name: "Crispy Chill Cheesburger",
    description: "Healthy...and green...",
    price: 18.99,
    picture: "https://media.zelty.fr/images/642/09001.png",
  },
];

function AvailableMeals() {
  const [expand, setExpand] = useState(false);

  const expandHandler = (e) => {
    e.preventDefault();
    setExpand(!expand);
  };

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      picture={meal.picture}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <div className={classes.head} onClick={expandHandler}>
          <h1>Our Finest Burgers</h1>{" "}
          {!expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>
        {expand && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
}

export default AvailableMeals;
