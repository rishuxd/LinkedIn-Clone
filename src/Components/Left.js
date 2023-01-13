import styled from "styled-components";

const Left = (props) => {
  return (
    <Container>
      <MeCard>
        <UserInfo>
          <Background />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
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
        </Widget>
        <Item>
          <span>
            <img src="/Images/item-icon.svg" alt="" />
            My Items
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
          <span>Follow Hashtags</span>
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
  height: 54px;
  margin: -12px -12px 0;
  background: url("/Images/card-bg.svg");
  background-position: center;
  background-size: 462px;
`;
const Photo = styled.div`
  background-image: url("Images/photo.svg");
  width: 72px;
  height: 72px;
  box-shadow: none;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  margin: -38px auto 12px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  background-size: 60%;
  background-clip: content-box;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
`;
const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
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
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(MeCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
`;

export default Left;
