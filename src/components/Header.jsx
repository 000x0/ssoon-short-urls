import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderContainer = styled.div`
  transition:.3s;
  position:fixed;
`;

const MainMenu = styled.div`
  margin: 0;
  padding: 0;

  ul li {
    display: inline-block;

    a {
      color: ${(props) => props.theme.colors.white};
      display: block;
      padding: 25px 15px;
      font-weight: 700;
      font-size: 17px;
    }
  }
`;

const Logo = styled.div`
  font-size: 35px;
  padding-top: 5px;
  color: ${(props) => props.theme.colors.white};

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Header = () => (
  <header>
    <HeaderContainer className="navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Logo>
              <Link to="/">
                <span role="img" aria-label="emoji">👨🏼‍💻</span>
                <span> ssoon </span>
                <span role="img" aria-label="emoji">✂️</span>
              </Link>
            </Logo>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            <MainMenu className="main-menu">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>
                    <a href="https://khriztianmoreno.dev" target="_blank" rel="noopener noreferrer">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://khriztianmoreno.dev" target="_blank" rel="noopener noreferrer">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </MainMenu>
            <div className="mobile-menu" />
          </div>
        </div>
      </div>
    </HeaderContainer>
  </header>
);

export default Header;
