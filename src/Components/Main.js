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

      <div>
        <Article>
          <Person>
            <a>
              <img src="/Images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/Images/ellipsis.svg" alt="" />
            </button>
          </Person>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img
                src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75"
                alt=""
              />
            </a>
          </SharedImage>
          <Socials>
            <li>
              <button>
                <img
                  src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                  alt=""
                />
                <img
                  src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                  alt=""
                />
                <img
                  src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                  alt=""
                />
                <span>Shiksha Upanita and 198 others</span>
              </button>
            </li>
            <li>
              <a>80 reposts</a>
            </li>
          </Socials>
          <SocialActions>
            <button>
              <img src="/Images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/Images/comment-icon.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/Images/repost-icon.svg" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/Images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
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

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  /* padding-right: 40px; */
  padding: 12px 16px 0;

  a {
    display: flex;
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;

    img {
      width: 48px;
      height: 48px;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 8px;
      overflow: hidden;
      flex-basis: 0;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  text-align: left;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  padding: 0 16px;
  overflow: hidden;
`;

const SharedImage = styled.div`
  position: relative;
  display: block;
  background-color: #f9fafb;
  margin-top: 8px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Socials = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  line-height: 1.3;
  padding: 8px 0;
  margin: 0 16px;
  overflow: hidden;
  border-bottom: 1px solid #e9efdf;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      background: transparent;
      border: none;

      &:hover {
        color: #1f80e2;
        text-decoration: underline;
      }
    }

    a {
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: #1f80e2;
        text-decoration: underline;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  min-height: 40px;
  padding: 4px 8px;
  margin: 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.5);
    background: transparent;
    outline: none;
    border: none;
    border-radius: 4px;
    transition-duration: 170ms;

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

export default Main;
