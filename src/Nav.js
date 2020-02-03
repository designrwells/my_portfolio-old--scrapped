import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/articles', label: 'Articles' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
