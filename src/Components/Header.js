import styled from "styled-components";
import { connect } from "react-redux";
import { signOutAPI } from "../Actions";
import { Navigate } from "react-router-dom";

const Header = (props) => {
  return !props.user ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={require("../assets/images/Logo.png")} alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={require("../assets/images/Search.png")} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href>
                <img src={require("../assets/images/home.png")} alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href>
                <img src={require("../assets/images/net.png")} alt="" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a href>
                <img src={require("../assets/images/jobs.png")} alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href>
                <img src={require("../assets/images/msg.png")} alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a href>
                <img
                  src={require("../assets/images/notification.png")}
                  alt=""
                />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a href>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src={require("../assets/images/user.svg")} alt="" />
                )}
                <p>
                  Me
                  <img src={require("../assets/images/dropdown.png")} alt="" />
                </p>
              </a>

              <SignOut onClick={() => props.signOut()}>
                <a href>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a href>
                <img src={require("../assets/images/work.png")} alt="" />
                <span>
                  Work
                  <img src={require("../assets/images/dropdown.png")} alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000000;

  border-bottom: 1px solid #22232b;
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  z-index: 100;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      height: 40px;
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      opacity: 20%;
      border-radius: 4px;
      min-width: 240px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      outline: none;
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  width: 40px;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  display: flex;
  pointer-events: none;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #000;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    img {
      opacity: 1;
    }
    span {
      color: rgba(255, 255, 255);
    }
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid #fff;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(255, 255, 255);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  img {
    opacity: 0.6;
  }

  a {
    align-items: center;
    background: transparent;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    height: 54px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      border-top: 2px solid #161722;

      min-width: 84px;
    }
  }

  &:hover,
  &:active {
    a {
      img {
        opacity: 1;
      }
      span {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  background: #161722;
  width: 80px;
  height: 40px;
  top: 50px;
  transition-duration: 150ms;
  text-align: center;
  display: none;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const User = styled(NavList)`
  a {
    border: none;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    opacity: 1;

    @media (max-width: 768px) {
      width: 38px;
      height: 38px;
    }
  }

  p {
    display: flex;
    align-items: center;

    img {
      margin-top: 2px;
      margin-left: 4px;
      width: 12px;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 3px;
  }
`;

const Work = styled(User)`
  a > img {
    border-radius: 0;
    opacity: 0.8;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
  }
  span {
    display: flex;
    align-items: center;

    img {
      margin-top: 2px;
      margin-left: 4px;
      width: 12px;
    }
  }
  border-left: 1px solid rgba(255, 255, 255, 0.6);

  @media (max-width: 768px) {
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
