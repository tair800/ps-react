import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { FaPlaystation, FaSearch, FaBars } from "react-icons/fa";
import "./Navbar.css"; // Custom styling

const PSNavbar = () => {
  const [showGamesDropdown, setShowGamesDropdown] = useState(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <Navbar expand="lg" className="ps-navbar">
        <Container>
          {/* PlayStation Logo */}
          <Navbar.Brand href="#" className="ps-logo">
            <FaPlaystation size={30} />
          </Navbar.Brand>

          {/* Responsive Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown
                title="Games"
                id="games-dropdown"
                show={showGamesDropdown}
                onMouseEnter={() => setShowGamesDropdown(true)}
                onMouseLeave={() => setShowGamesDropdown(false)}
              >
                <div className="games-dropdown">
                  <div className="game-item">
                    <img src="/icons/ps5.png" alt="PS5" className="game-icon" />
                    <span>PS5</span>
                  </div>
                  <div className="game-item">
                    <img src="/icons/ps4.png" alt="PS4" className="game-icon" />
                    <span>PS4</span>
                  </div>
                  <div className="game-item">
                    <img src="/icons/psvr.png" alt="PS VR2" className="game-icon" />
                    <span>PS VR2</span>
                  </div>
                  <div className="game-item">
                    <img src="/icons/pc.png" alt="PC" className="game-icon" />
                    <span>PC</span>
                  </div>
                  <div className="game-item">
                    <img src="/icons/psplus.png" alt="PS Plus" className="game-icon" />
                    <span>PS Plus</span>
                  </div>
                </div>
              </NavDropdown>

              <NavDropdown title="PS5" id="ps5-dropdown">
                <NavDropdown.Item href="#">New Releases</NavDropdown.Item>
                <NavDropdown.Item href="#">Accessories</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PS4" id="ps4-dropdown">
                <NavDropdown.Item href="#">Games</NavDropdown.Item>
                <NavDropdown.Item href="#">Deals</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item href="#">PS Plus</NavDropdown.Item>
                <NavDropdown.Item href="#">Subscriptions</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="News" id="news-dropdown">
                <NavDropdown.Item href="#">Latest Updates</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Store" id="store-dropdown">
                <NavDropdown.Item href="#">PlayStation Store</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Support" id="support-dropdown">
                <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Search Icon & Sign In Button */}
            <div className="nav-icons">
              <FaSearch className="search-icon" />
              <Button className="sign-in-btn">Sign In</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PSNavbar;
