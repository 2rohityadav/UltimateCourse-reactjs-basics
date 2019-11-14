import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ links }) => (
  <footer>
    <nav aria-label="Secondary">
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
