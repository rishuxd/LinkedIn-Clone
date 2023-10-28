import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { signInAPI } from "../Actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  return props.user ? (
    <Navigate to="/home" />
  ) : (
    <Container>
      <Nav>
        <a href="/">
          <ImageLogo
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt=""
          />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your prefessional community.</h1>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt=""
          />
        </Hero>
        <Form>
          <Google onClick={() => props.SignIn()}>
            <img
              src="https://img.icons8.com/?size=512&id=17949&format=png"
              alt=""
            />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const ImageLogo = styled.img`
  width: 150px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  max-width: 1128px;
  margin: auto;
  padding: 12px 0;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.button`
  font-size: 16px;
  padding: 12px 14px;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 12px;
  border: none;
  border-radius: 4px;
  border-radius: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.button`
  font-size: 16px;
  border-radius: 24px;
  color: #0a66c2;
  border: 2px solid #0a66c2;
  padding: 10px 24px;
  transition-duration: 150ms;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 138px;
  padding: 60px 0;
  position: relative;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  min-height: 700px;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    color: #2977c9;
    font-size: 56px;
    line-height: 70px;
    font-weight: 200;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      line-height: 2;
      width: 100%;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: 100px;
    right: -150px;
    @media (max-width: 768px) {
      width: 350px;
      height: 60vh;
      right: 0px;
      position: relative;
      bottom: 0px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 488px;
  @media (max-width: 768px) {
    margin: 0 20px;
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 150ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(287, 287, 287, 0.25);
    color: rgba(0, 0, 0, 0.75);
    border-color: rgba(0, 0, 0, 0.6);
  }

  img {
    margin-right: 10px;
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
