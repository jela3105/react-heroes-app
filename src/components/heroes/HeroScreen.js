import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  );
};
