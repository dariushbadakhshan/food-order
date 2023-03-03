import { FC } from "react";

type props = {
  name: string;
  description: string;
  price: number;
};
const MealItemContent: FC<props> = ({ name, description, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
};
export default MealItemContent;
