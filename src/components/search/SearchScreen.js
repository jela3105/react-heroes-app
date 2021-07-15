import React from "react";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Find you hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
