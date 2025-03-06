import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Custom CSS for styling

const Home = () => {
  const navigate = useNavigate();

  // Data for new games
  const newGames = [
    {
      id: 1,
      title: "Monster Hunter Wilds",
      image: "https://image.api.playstation.com/pr/bam-art/203/062/3e1e166c-1ae5-45fd-a966-383b36f61bd3.jpg?w=5000&thumb=false",
    },
    {
      id: 2,
      title: "PGA TOUR 2K25",
      image: "https://image.api.playstation.com/pr/bam-art/202/062/1f5b1c69-45e4-4d6f-82b5-2c06641c5e5c.jpg?w=5000&thumb=false",
    },
    {
      id: 3,
      title: "Kingdom Come: Deliverance II",
      image: "https://image.api.playstation.com/pr/bam-art/201/056/002d6f3d-44c9-4f66-844c-c3b7a117d276.jpg?w=5000&thumb=false",
    },
    {
      id: 4,
      title: "Sid Meier’s Civilization VII",
      image: "https://image.api.playstation.com/pr/bam-art/200/045/1d3d2a4e-6d2b-4f9d-9ef3-8b77e002648a.jpg?w=5000&thumb=false",
    },
    {
      id: 5,
      title: "Deadside",
      image: "https://image.api.playstation.com/pr/bam-art/199/045/5c0ef3d9-2a43-4b62-95f3-3f3c6e0ea3a1.jpg?w=5000&thumb=false",
    },
  ];

  // Data for pre-orders
  const preOrders = [
    {
      id: 6,
      title: "WWE 2K25 The Bloodline",
      image: "https://image.api.playstation.com/pr/bam-art/198/045/3f2b6f7e-0d29-4f32-9a4f-5a34e0029e27.jpg?w=5000&thumb=false",
    },
    {
      id: 7,
      title: "MLB® The Show™ 25",
      image: "https://image.api.playstation.com/pr/bam-art/197/045/2d4c6b8f-7e0f-4b3f-8e5a-1b45d6c4b3a1.jpg?w=5000&thumb=false",
    },
    {
      id: 8,
      title: "Assassin’s Creed Shadows",
      image: "https://image.api.playstation.com/pr/bam-art/196/045/4d2e7c4d-5f2d-4b6f-a3f9-9e6d5e3b2a1b.jpg?w=5000&thumb=false",
    },
    {
      id: 9,
      title: "Forza Horizon 5 Premium",
      image: "https://image.api.playstation.com/pr/bam-art/195/045/1b5c2d3e-4c6d-4e7f-a5b9-3d2e5c4b3a1b.jpg?w=5000&thumb=false",
    },
  ];

  return (
    <Container className="home-page">
      {/* Banner Carousel */}
      <Carousel className="banner-carousel">
        {newGames.map((game) => (
          <Carousel.Item key={game.id} onClick={() => navigate(`/game/${game.id}`)} className="carousel-slide">
            <img src={game.image} alt={game.title} className="banner-image" />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* New Games Section */}
      <div className="section-header">
        <h2>New Games</h2>
        <span className="view-all" onClick={() => navigate("/new-games")}>View All</span>
      </div>
      <Row className="game-slider mx-0">
        {newGames.map((game) => (
          <Col key={game.id} xs={6} md={4} lg={2} className="p-0" onClick={() => navigate(`/game/${game.id}`)}>
            <Card className="game-card">
              <Card.Img variant="top" src={game.image} />
              <Card.Body>
                <p className="game-card-title">{game.title}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* View All Card */}
        <Col xs={6} md={4} lg={2} className="p-0" onClick={() => navigate("/new-games")}>
          <Card className="game-card view-all-card">
            <Card.Body>
              <p className="game-card-title">View All</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Pre-orders Section */}
      <div className="section-header">
        <h2>Pre-orders</h2>
        <span className="view-all" onClick={() => navigate("/pre-orders")}>View All</span>
      </div>
      <Row className="game-slider">
        {preOrders.map((game) => (
          <Col key={game.id} xs={6} md={4} lg={2} onClick={() => navigate(`/game/${game.id}`)}>
            <Card className="game-card">
              <Card.Img variant="top" src={game.image} />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* View All Card */}
        <Col xs={6} md={4} lg={2} onClick={() => navigate("/pre-orders")}>
          <Card className="game-card view-all-card">
            <Card.Body>
              <Card.Title>View All</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
