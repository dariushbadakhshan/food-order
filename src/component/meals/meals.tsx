import { useEffect, useState } from "react";
import MealItem from "./meals-item";

type meals = {
  id: string;
  name: string;
  description: string;
  price: number;
};
const Meals = () => {
  const [meals, setMeals] = useState<meals[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-1d967-default-rtdb.firebaseio.com/meals.json"
      );

      const data = await response.json();

      const loadedMeals: meals[] = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealItem = meals.map((item) => <MealItem key={item.id} item={item} />);
  return (
    <div>
      <ul>{mealItem}</ul>
    </div>
  );
};
export default Meals;
