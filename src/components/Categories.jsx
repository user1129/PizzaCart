import { useContext } from "react";
import { Context } from "../pages/Home.jsx";
const Categories = () => {
  const { selectedCategory, setCategory } = useContext(Context);

  const category = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {category.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setCategory(index)}
              className={selectedCategory === index ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Categories;
