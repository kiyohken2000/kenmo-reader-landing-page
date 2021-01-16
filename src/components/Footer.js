import React from 'react';
import { Link } from 'gatsby';

const kenmofm = <a className="badge-link" href="https://kenmo.fm" target="_blank" rel="noreferrer noopener">Kenmo FM 567THz</a>
const kenmoportal = <a className="badge-link" href="https://kenmo-fm.com" target="_blank" rel="noreferrer noopener">ケンモポータル</a>
const kenmo = <a className="badge-link" href="http://leia.5ch.net/poverty/" target="_blank" rel="noreferrer noopener">嫌儲</a>

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
        <p>Inspired by ❤️ {kenmofm} ❤️ {kenmoportal} ❤️ {kenmo}</p>
      </div>
    </footer>
  );
}

