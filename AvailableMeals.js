import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css'


const DUMMY_MEALS = [
  {
    Id: "101",
    name: "Puri-sabji",
    description: "puri-sabji with salad",
    price: 60,
  },
  {
    Id: "102",
    name: "Paneer-tikka",
    description: "Delicious Paneer",
    price: 60,
  },
  {
    Id: "103",
    name: "Paneer-Burger",
    description: "Amarican,Burgar king",
    price: 60,
  },
  {
    Id: "104",
    name: "Pizza",
    description: "German pizza",
    price: 60,
  },
];


const AvailableMeals = ()=>{
    const mealsList = DUMMY_MEALS.map((meal)=> 
    <MealItem key={meal.Id} 
    name={meal.name} 
    description={meal.description}
    price={meal.price} />)
return (
  <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
  </section>
);
}
export default AvailableMeals;