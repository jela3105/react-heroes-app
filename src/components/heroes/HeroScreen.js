import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      hero.publisher === "Marvel Comics" && history.push("/");
      hero.publisher === "DC Comics" && history.push("/dc");
    } else {
      history.goBack();
    }
  };

  return (
    <div>
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          {" "}
          Return{" "}
        </button>
      </div>
    </div>
  );
};
