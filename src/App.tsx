import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import SearchBox from "./components/SearchBox";

function App() {
  const [isLoading, changeLoader] = useState(true);
  const [data, changeData] = useState([]);
  const [fectchedData, changeFectchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://starlord.hackerearth.com/TopRamen");
      let data = await response.json();
      changeData(data);
      changeFectchedData(data);
      changeLoader(false);
    };
    fetchData();
  }, []);

  const onChangeSearch = ({
    param,
    searchText
  }: {
    param: string;
    searchText: string;
  }) => {
    if (searchText === "") {
      changeData(fectchedData);
      return;
    }
    let newData = [
      ...fectchedData.filter((item: any) => {
        return item[param || Object.keys(data[0])[0]]
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase());
      })
    ];
    changeData(newData);
  };

  return (
    <div className="App">
      <SearchBox
        options={Object.keys(fectchedData.length ? fectchedData[0] : {})}
        onChangeSearch={onChangeSearch}
      />
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="card-list">
          {data.map((item: any, index: number) => (
            <Card key={index} details={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
