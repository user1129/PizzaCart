import React, { useState } from "react";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import { setPizza } from "../redux/slices/pizzaSlice";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import qs from "qs";
import { setFilters } from "../redux/slices/filterSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const { selectedCategoryRedux, selectedSortRedux } = useSelector(
    (state) => state.filter
  );
  const Fetch = () => {
    setLoad(true);
    axios
      .get(
        `https://63dba442c45e08a0434a2988.mockapi.io/items?sortBy=${sortParam}${searchParam}${categoryParam}`
      )
      .then((res) => {
        dispatch(setPizza(res.data));  
      });
    setLoad(false);
  }
 
  const pizzaState = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.filter.searchRedux);
  const [pizzaLoad, setLoad] = React.useState(true);
  const sortParams = ["rating&order=desc", "price", "title"];
  const searchParam = searchState ? `&search=${searchState.toLowerCase()}` : "";
  const categoryParam =
    selectedCategoryRedux > 0 ? `&category=${selectedCategoryRedux}` : "";
  const sortParam = sortParams[selectedSortRedux];
  
  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params))
      
    }
    
  },[])
  
  React.useEffect(() => {
   
      Fetch();
    
  
  }, [selectedCategoryRedux, selectedSortRedux, searchState]);

  React.useEffect(() => {
    
      const queryString = qs.stringify({
        selectedCategoryRedux,
        selectedSortRedux
  
      });
      navigate(`?${queryString}`)
    
    
  },[selectedCategoryRedux, selectedSortRedux, searchState])

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>

        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzaLoad || pizzaState.length < 1
            ? [...new Array(16)].map((_, index) => <Skeleton key={index} />)
            : pizzaState.map((value, index) => (
                <PizzaBlock key={value.id} {...value} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
