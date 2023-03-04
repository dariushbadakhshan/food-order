import { FC } from "react";
import MealItemForm from "./meals-item-form";
import MealItemContent from "./meals-item-content";

type props = {
  item: { id: string; name: string; description: string; price: number };
};
const MealItem: FC<props> = ({ item }) => {
  return (
    <li>
      <MealItemContent
        name={item.name}
        description={item.description}
        price={item.price}
      />
      <MealItemForm item={item} />
    </li>
  );
};
export default MealItem;
