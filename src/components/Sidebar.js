import React, { useState } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsHouseDoor, BsBox, BsPerson, BsGear, BsFire } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import './Sidebar.css'; // Custom CSS for styling
import Kart from './Kart';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div 
      className={`sidebar ${expanded ? 'expanded' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <Navbar bg="dark" variant="dark" className="flex-column">
        <Navbar.Brand href="#home" className="text-center">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Dashboard</Tooltip>}
          >
            <span>
              <BsFire size={30} className="icon text-warning" />
            </span>
          </OverlayTrigger>
        </Navbar.Brand>
        <Nav className="flex-column">
          <OverlayTrigger placement="right" overlay={<Tooltip>Home</Tooltip>}>
            <Nav.Link 
              href="#home" 
              className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} 
              onClick={() => handleNavClick('#home')}
            >
              <BsHouseDoor size={20} className="icon" />
              {expanded && <span className="nav-text">Home</span>}
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={<Tooltip>Menu</Tooltip>}>
            <Nav.Link 
              href="#menu" 
              className={`nav-link ${activeLink === '#menu' ? 'active' : ''}`} 
              onClick={() => handleNavClick('#menu')}
            >
              <BsBox size={20} className="icon" />
              {expanded && <span className="nav-text">Menu</span>}
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={<Tooltip>Delicious one</Tooltip>}>
            <Nav.Link 
              href="#fillpicker" 
              className={`nav-link ${activeLink === '#fillpicker' ? 'active' : ''}`} 
              onClick={() => handleNavClick('#fillpicker')}
            >
              <BsPerson size={20} className="icon" />
              {expanded && <span className="nav-text">Delicious one</span>}
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={<Tooltip>Contact</Tooltip>}>
            <Nav.Link 
              href="#contact" 
              className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`} 
              onClick={() => handleNavClick('#contact')}
            >
              <BsGear size={20} className="icon" />
              {expanded && <span className="nav-text">Contact</span>}
            </Nav.Link>
          </OverlayTrigger>
          <div className="mt-auto">
            <OverlayTrigger placement="right" overlay={<Tooltip>Dark Mode</Tooltip>}>
              <Nav.Link href="#dark-mode">
                <FaMoon size={20} className="icon" />
                {expanded && <span className="nav-text">Dark Mode</span>}
              </Nav.Link>
            </OverlayTrigger>
            <Kart/>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
