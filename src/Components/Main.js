import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/Images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/Images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/Images/video-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/Images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/Images/article-icon.svg" alt="" />
            <span>Write artical</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      display: flex;
      align-items: center;
      outline: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      min-height: 48px;
      font-weight: 600;
      line-height: 1.5px;
      border: none;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        border: 1px solid rgba(0, 0, 0, 0.15);
        flex-grow: 1;
        margin: 4px 0;
        padding-left: 16px;
        border-radius: 35px;
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      padding-bottom: 4px;
      flex-wrap: wrap;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

export default Main;
