import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const links = [
  { href: 'about', text: 'About' },
  { href: 'work', text: 'My Work' },
  { href: 'contact', text: 'Contact Me' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink
      style={{ color: '#061a63', cursor: 'pointer' }}
      className={className}
    >
      <Link to={href} smooth offset={-30}>
        {text}
      </Link>
    </NavLink>
  </NavItem>
);

createNavItem.propTypes = {
  className: PropTypes.object,
  text: PropTypes.string,
  href: PropTypes.string,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar
        style={{ maxHeight: '65px', background: '#fdfdfd' }}
        light
        expand="md"
      >
        <NavbarBrand style={{ color: '#061a63' }} href="/">
          <i
            className="ri-terminal-box-line"
            style={{ color: '#061a63', fontSize: '56px' }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={onClickMenu} />
        <Collapse style={{ backgroundColor: '#fdfdfd' }} isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
