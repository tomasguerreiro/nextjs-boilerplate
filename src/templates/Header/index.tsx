import React from 'react';
import Link from 'next/link';

import { HeaderStyled } from './styles/styled';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <img
          src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo4.png"
          alt="Logo Placeholder"
        />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a>Users List</a>
            </Link>
          </li>
          <a href="/api/users">Users API</a>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
