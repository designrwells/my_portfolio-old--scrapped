import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

const routes = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
];

const PortNav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <Navbar className="justify-content-end">{ links }</Navbar>;
}

export default PortNav
