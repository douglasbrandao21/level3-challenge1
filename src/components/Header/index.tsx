import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, Link } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" active={location.pathname === '/'}>
            Listagem
          </Link>
          <Link to="/import" active={location.pathname === '/import'}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
