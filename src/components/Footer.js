import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; kenmo reader 2021. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
