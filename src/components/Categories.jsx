import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../redux/slices/filterSlice.js";
const Categories = () => {
  const state = useSelector((state) => state.filter.selectedCategoryRedux);
  const dispatch = useDispatch();
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
              onClick={() => dispatch(changeCategory(index))}
              className={state === index ? "active" : ""}
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

