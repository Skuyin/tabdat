import { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import ScrollToTop from './ScrollToTop';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--dark-bg);
  padding: 0.5rem;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    color: var(--gray-1);
    .logo {
        font-weight: 600;
        color: #ff7f50;
        font-family: 'Montserrat SemiBold';
        font-size: 2rem;
    }
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
      color: var(--gary-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  .scroll__top {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      background-color: #ff7f50;
      padding: 5px;
      border-radius: 50%;
      color: white;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(---top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function Navbar() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
            <Link href="/"><a className="logo">tabuladata</a></Link>
        </li>
        <li onClick={() => SetShowNav(!showNav)}>
          <Link
            href="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </Link>
        </li>
        <li onClick={() => SetShowNav(!showNav)}>
          <Link
            href="/About"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </Link>
        </li>
        <li onClick={() => SetShowNav(!showNav)}>
          <Link
            href="/Projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </Link>
        </li>
        <li onClick={() => SetShowNav(!showNav)}>
          <Link
            href="/Contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            <a>Contact</a>
          </Link>
        </li>
        <li className="scroll__top" onClick={() => SetShowNav(!showNav)}>
          <ScrollToTop />
        </li>
      </ul>
    </NavMenuStyles>
  );
}
