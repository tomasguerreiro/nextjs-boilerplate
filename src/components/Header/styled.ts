import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;
  background-color: ${(p) => p.theme.colors.light};

  box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.1),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.1);

  .logo {
    height: 100%;
    padding: 0.5rem 0;

    img,
    svg {
      display: block;
      height: 100%;
    }
  }

  .menu {
    ul {
      display: flex;
      list-style: none;
    }

    a {
      color: ${(p) => p.theme.colors.dark};
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      padding: 1rem 1.2rem;
    }

    a:hover {
      background-color: ${(p) => darken(0.05, p.theme.colors.primary)};
      color: ${(p) => p.theme.colors.light};
    }
  }
`;
