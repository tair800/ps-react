import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css"; // Custom CSS for additional styling

const Home = () => {
  return (
    <div className="home-page">
  
      {/* Banner Section */}
      <div className="banner">
        <img
          src="https://image.api.playstation.com/pr/bam-art/203/062/3e1e166c-1ae5-45fd-a966-383b36f61bd3.jpg?w=5000&thumb=false"
          alt="Monster Hunter Wilds"
          className="banner-image"
        />
        <div className="banner-content">
        
          <Button className="btn-primary">Buy now</Button>
        </div>
      </div>


    </div>
  );
};

export default Home;
