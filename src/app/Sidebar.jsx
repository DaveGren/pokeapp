import React from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.scss';

const Sidebar = () => (
  <nav className="Sidebar">
    <NavLink activeClassName="Sidebar-element-active" className="Sidebar-element" to="/pokedex">Pokedex</NavLink>
    <NavLink activeClassName="Sidebar-element-active" className="Sidebar-element" to="/home">Go to dashboard</NavLink>
  </nav>
);

export default Sidebar;