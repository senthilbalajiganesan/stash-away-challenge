import React, { useState, useEffect } from "react";

export default (props: any) => {
  const [searchText, changeSearchText] = useState("");
  const [searchParam, changeParam] = useState(props.options[0] || "");

  useEffect(() => {
    props.onChangeSearch({ param: searchParam, searchText });
  }, [searchText]);

  return (
    <div className="row">
      <select
        onChange={event => {
          changeSearchText("");
          changeParam(event.target.value);
        }}
        className="search-slt"
      >
        {props.options.map((item: string, index: number) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="search"
        placeholder="Start Searching..."
        className="search-slt search-input"
        onChange={event => changeSearchText(event.target.value)}
        value={searchText}
      />
    </div>
  );
};
