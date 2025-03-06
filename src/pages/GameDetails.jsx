import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const gameData = {
  1: { title: "Monster Hunter Wilds", description: "Experience the most evolved Monster Hunter game yet." },
  2: { title: "Spider-Man 2", description: "Swing through the streets of New York with new abilities." },
  3: { title: "Helldivers 2", description: "Co-op shooter with intense battles." },
};

const GameDetails = () => {
  const { id } = useParams();
  const game = gameData[id];

  return (
    <Container className="mt-4">
      <h1>{game?.title}</h1>
      <p>{game?.description}</p>
    </Container>
  );
};

export default GameDetails;
