import styled from "styled-components";

const Right = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/Images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommandation>
          View all recommendations
          <img src="/Images/right-icon.svg" alt="" />
        </Recommandation>
      </FollowCard>

      <BannerCard>
        <img
          src="https://cdn.ihsmarkit.com/www/images/0821/Company-178447404.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: right;
`;

const FollowCard = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  border: none;
  padding: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 12px 0;
    position: relative;

    div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      padding: 16px;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      font-weight: 600;
      max-height: 32px;
      max-width: 480px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("http://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommandation = styled.div`
  display: flex;
  align-items: center;
  color: #0a66c2;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Right;
