import React from 'react';

type PropsType = {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

function MainPageFilter({ sort, setSort }: PropsType) {
  return (
    <select
      name="sort-by"
      id="sort-by"
      value={sort}
      onChange={(event) => {
        setSort(event.target.value);
      }}
    >
      <option value="default">Sort by</option>
      <option value="price-ascending">Cheapest first</option>
      <option value="price-descending">Expensive first</option>
      <option value="alphabet-ascending">Sort alphabetically A-Z</option>
      <option value="alphabet-descending">Sort alphabetically Z-A</option>
    </select>
  );
}

export default MainPageFilter;
