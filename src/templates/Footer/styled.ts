import styled from 'styled-components';
import { darken } from 'polished';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(p) => p.theme.colors.light};

  box-shadow: 0 14px 26px 12px rgba(0, 0, 0, 0.1),
    0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px 5px rgba(0, 0, 0, 0.1);
`;
