import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import useWindowSize from './useWindowSize'; // Custom hook to detect screen size

const ProjectNavBar = ({ toggleSidebar }) => {
  const screenWidth = useWindowSize(); // Get current screen width
  const isMobile = screenWidth < 992; // Bootstrap 'lg' breakpoint (992px)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      {/* Show hamburger icon only on mobile */}
      {isMobile && (
        <Button variant="outline-light" onClick={toggleSidebar} className="me-3">
          ☰
        </Button>
      )}
      <Navbar.Brand href="/docs">PM Docs</Navbar.Brand>
    </Navbar>
  );
};

export default ProjectNavBar;
