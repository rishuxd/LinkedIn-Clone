import styled from "styled-components";
import { connect } from "react-redux";

const Left = (props) => {
  return (
    <Container>
      <MeCard>
        <UserInfo>
          <Background />
          <a href>
            <Photo src={props.user.photoURL} />
            <Link>
              {props.user ? props.user.displayName : "Welcome there!"}
            </Link>
          </a>
          <a href>
            <MyDesc>
              CS Student at @DU || Content Creator - rishu Unfiltered ||
              Guitarist & Ukulelist
            </MyDesc>
          </a>
        </UserInfo>
        <Widget>
          <a href>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={require("../assets/images/plus.png")} alt="" />
          </a>
          <a href>
            <span>Who's viewed your profile</span>
            <span>29</span>
          </a>
        </Widget>
        <Item>
          <span>
            <img src={require("../assets/images/bookmark.png")} alt="" />
            My items
          </span>
        </Item>
      </MeCard>

      <CommunityCard>
        <a href>
          <span>Groups</span>
          <img src={require("../assets/images/plus.png")} alt="" />
        </a>
        <a href>
          <span>Events</span>
          <img src={require("../assets/images/plus.png")} alt="" />
        </a>
        <a href>
          <span>Followed Hashtags</span>
          <img src={require("../assets/images/plus.png")} alt="" />
        </a>
        <a href>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: left;
`;

const MeCard = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #000000;
  color: #fff;
  transition: box-shadow 83ms;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  word-wrap: break-word;
  padding: 12px 12px 16px;
  border-bottom: 1px solid #161722;
`;
const Background = styled.div`
  height: 56.25px;
  margin: -12px -12px 0;
  background-image: url(${require("../assets/images/banner.png")});
  background-position: center;
  background-size: cover;
`;
const Photo = styled.img`
  width: 72px;
  height: 72px;
  box-shadow: none;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin: -38px auto 12px;
  background-color: white;
  border: 2px solid #000000;
  background-size: contain;
  background-clip: content-box;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  color: #ffffff;
`;
const MyDesc = styled.div`
  color: #c4c4c4;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid #161722;
  padding: 12px 0;

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: #202132;
    }

    &:last-child {
      font-weight: 600;
      font-size: 12px;
      line-height: 1.33;

      span {
        &:first-child {
          color: #c4c4c4;
        }
        &:last-child {
          color: #0a66c2;
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 1.33;

      &:first-child {
        color: #c4c4c4;
      }
      &:nth-child(2) {
        color: #fff;
      }
    }
  }
`;

const Item = styled.div`
  text-align: left;
  padding: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #c4c4c4;

  span {
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }

  &:hover {
    background-color: #202132;
  }
`;

const CommunityCard = styled(MeCard)`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0;
  text-align: left;
  font-weight: 600;

  a {
    display: flex;
    justify-content: space-between;
    color: #0a66c2;
    padding: 8px 12px;
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }

    span {
      display: flex;
      align-items: center;

      img {
        margin-left: 154px;
      }
    }

    &:last-child {
      color: #c4c4c4;
      border-top: 1px solid #161722;
      padding: 12px;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      transition-duration: 170ms;

      &:hover {
        text-decoration: none;
        background-color: #202132;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Left);
