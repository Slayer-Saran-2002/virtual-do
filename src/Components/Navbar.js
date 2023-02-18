import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: bold;
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
`;

const MobileMenuCloseButton = styled.button`
  display: block;
  margin-bottom: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const MobileMenuLink = styled.a`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: bold;
  }
`;

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <Nav>
      <h1>Logo</h1>

      <MobileMenuButton onClick={toggleMobileMenu}>
        <i className="fa fa-bars"></i>
      </MobileMenuButton>

      <NavMenu>
        <NavMenuItem>
          <NavLink href="#" className="active">
            Home
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="#">About</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="#">Services</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink href="#">Contact</NavLink>
        </NavMenuItem>
      </NavMenu>

      {showMobileMenu && (
        <MobileMenu>
          <MobileMenuCloseButton onClick={toggleMobileMenu}>
            <i className="fa fa-times"></i>
          </MobileMenuCloseButton>

          <MobileMenuLink href="#" className="active">
            Home
          </MobileMenuLink>
          <MobileMenuLink href="#">About</MobileMenuLink>
          <MobileMenuLink href="#">Services</MobileMenuLink>
          </MobileMenu>
      )}
    </Nav>
  );
};
export default NavBar