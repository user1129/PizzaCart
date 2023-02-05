import React, {useState} from "react";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import { SearchContext } from "../App"; 
export const Context = React.createContext();
const Home = () => {
  const {input} = React.useContext(SearchContext)
  const [selectedCategory,setCategory] = useState(0)
  const [selectedSort,setSort] = useState(0);
  const [pizzas, setPizzas] = React.useState([]);
  const [pizzaLoad, setLoad] = React.useState(true);
  const sortParams = ['rating&order=desc','price','title']
  const searchParam = input ? `&search=${input.toLowerCase()}` : '';
  const categoryParam = selectedCategory > 0 ? `&category=${selectedCategory}` : ''
  const sortParam = sortParams[selectedSort];
  React.useEffect(() => {
    setLoad(true)
    fetch(`https://63dba442c45e08a0434a2988.mockapi.io/items?sortBy=${sortParam}${searchParam}${categoryParam}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoad(false)
      });
  }, [selectedCategory,selectedSort,input]);
  return (
    <div className="content">
      <div className="container">
    <Context.Provider value={{selectedSort,setSort,selectedCategory,setCategory}}>
    <div className="content__top">
          <Categories />
          <Sort />
        </div>
    </Context.Provider>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzaLoad || pizzas.length < 1
            ? [...new Array(16)].map((_, index) => <Skeleton />)
            : pizzas.map((value, index) => (
                <PizzaBlock key={value.id} {...value} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
