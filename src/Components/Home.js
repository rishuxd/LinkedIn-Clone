import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";
import { connect } from "react-redux";

const Home = (props) => {
  return !props.user ? (
    <Navigate to="/" />
  ) : (
    <Container>
      <Content>
        <Layout>
          <Left />
          <Main />
          <Right />
        </Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "left main right";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
