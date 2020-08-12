import styled, { css } from 'styled-components';

import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface MenuProps extends LinkProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
      }
    }
  }
`;

export const Link = styled(ReactRouterLink)<MenuProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  position: relative;

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }

  ${props =>
    props.active &&
    css`
      &:after {
        content: '';
        position: absolute;
        width: 70px;
        height: 2px;
        left: 50%;
        bottom: -12px;
        margin-left: -35px;
        background-color: #ff872c;
      }
    `}
`;
