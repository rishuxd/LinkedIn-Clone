import styled from "styled-components";
import { connect } from "react-redux";

const Left = (props) => {
  return (
    <Container>
      <MeCard>
        <UserInfo>
          <Background />
          <a>
            <Photo />
            <Link>
              {props.user ? props.user.displayName : "Welcome there!"}
            </Link>
          </a>
          <a>
            <MyDesc>
              CS Student at @DU || Content Creator - rishu Unfiltered ||
              Guitarist & Ukulelist
            </MyDesc>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/Images/widget-icon.svg" alt="" />
          </a>
          <a>
            <span>Who's viewed your profile</span>
            <span>29</span>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/Images/item-icon.svg" alt="" />
            My items
          </span>
        </Item>
      </MeCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/Images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Followed Hashtags</span>
        </a>
        <a>
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
  margin-bottom: 8px;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  transition: box-shadow 83ms;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  word-wrap: break-word;
  padding: 12px 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const Background = styled.div`
  height: 56.25px;
  margin: -12px -12px 0;
  background: url("https://media.licdn.com/dms/image/C4D16AQHm7vmv3Ag1mw/profile-displaybackgroundimage-shrink_200_800/0/1657876302846?e=1679529600&v=beta&t=5640VzTz3ynieF48njoWOrz0cBs1SxU9-wNU0wDbbqs");
  background-position: center;
  background-size: cover;
`;
const Photo = styled.div`
  background-image: url("https://media.licdn.com/dms/image/C4D03AQGif0MHAdPSxw/profile-displayphoto-shrink_100_100/0/1657876349127?e=1679529600&v=beta&t=cl2keRuoksIGPFabHX0PL13Y1lgA9VOCxrQpavi36Qc");
  width: 72px;
  height: 72px;
  box-shadow: none;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin: -38px auto 12px;
  background-color: white;
  border: 2px solid white;
  background-size: contain;
  background-clip: content-box;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;
const MyDesc = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    &:last-child {
      font-weight: 600;
      font-size: 12px;
      line-height: 1.33;

      span {
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
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
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const Item = styled.div`
  text-align: left;
  padding: 12px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);

  span {
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(MeCard)`
  display: flex;
  flex-direction: column;
  padding: 8px 0 0;
  text-align: left;
  font-weight: 600;

  a {
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
        margin-left: 18px;
      }
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;
      font-size: 14px;
      display: inline-flex;
      justify-content: center;
      transition-duration: 170ms;

      &:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.06);
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
