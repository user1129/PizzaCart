import React from "react";
import { useDispatch } from "react-redux";
import { changeSearch } from "../redux/slices/filterSlice";
import "../assets/app.css";
import debounce from "lodash.debounce";
const Search = () => {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState('');

  const onClickClear = () => {
    setValue('');
    dispatch(changeSearch(''))
    inputRef.current.focus();
  };

  const updateSearch = React.useCallback(
    debounce((e) => {
      dispatch(changeSearch(e.target.value));
      }, 750),
    []
  ); 
  const onChangeInput = event => {
    setValue(event.target.value);
    updateSearch(event)
  }

  
  const dispatch = useDispatch();
  return (
    <div style={{ position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="25px"
        style={{
          position: "absolute",
          top: "8px",
          left: "7px",
          opacity: "0.5",
        }}
      >
        <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
      </svg>
      <input
        value={value}
        className="search"
        placeholder="Поиск пицц..."
        onChange={(e) => onChangeInput(e)}
        ref={inputRef}
      />
     { value &&
       <svg
       onClick={() => onClickClear()}
       xmlns="http://www.w3.org/2000/svg"
       className="feather feather-x"
       fill="none"
       height="24"
       stroke="currentColor"
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       viewBox="0 0 24 24"
       width="24"
       opacity={0.5}
       style={{ position: "absolute", top: 8, right: 5, cursor: "pointer" }}
     >
       <line x1="18" x2="6" y1="6" y2="18" />
       <line x1="6" x2="18" y1="6" y2="18" />
     </svg>

     }
    </div>
  );
};
export default Search;
