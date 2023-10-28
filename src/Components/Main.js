import styled from "styled-components";
import PostModal from "./PostModal";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getArticlesAPI } from "../Actions";
import ReactPlayer from "react-player";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="" />
          ) : (
            <img src="/Images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
        <div>
          <button>
            <img src={require("../assets/images/img.png")} alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src={require("../assets/images/video.png")} alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src={require("../assets/images/event.png")} alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src={require("../assets/images/article.png")} alt="" />
            <span>Write artical</span>
          </button>
        </div>
      </ShareBox>

      <LoadingBox>
        {props.loading && (
          <img src={require("../assets/images/icons8-spin.gif")} alt="" />
        )}
      </LoadingBox>

      {props.articles.length === 0 ? (
        <p style={{ color: "#c4c4c4", textAlign: "center" }}>
          Norhing to show.
        </p>
      ) : (
        <Content>
          {props.articles.length > 0 &&
            props.articles.map((article, key) => (
              <Article key={key}>
                <Person>
                  <a href>
                    <img src={article.actor.image} alt="" />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.date.toDate().toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                  <button>
                    <img src={require("../assets/images/elipses.png")} alt="" />
                  </button>
                </Person>
                <Description>{article.description}</Description>
                <SharedImage>
                  <a href>
                    {!article.sharedImg && article.video ? (
                      <ReactPlayer width={"100%"} url={article.video} />
                    ) : (
                      article.sharedImg && (
                        <img src={article.sharedImg} alt="" />
                      )
                    )}
                  </a>
                </SharedImage>
                <Socials>
                  <li>
                    <button>
                      <img src={require("../assets/images/like.png")} alt="" />
                      <img src={require("../assets/images/heart.png")} alt="" />
                      <span>{article.comments}</span>
                    </button>
                  </li>
                  <li>
                    <a href> 0 reposts</a>
                  </li>
                </Socials>
                <SocialActions>
                  <button>
                    <img src={require("../assets/images/thumb.png")} alt="" />
                    <span>Like</span>
                  </button>
                  <button>
                    <img src={require("../assets/images/cmnt.png")} alt="" />
                    <span>Comments</span>
                  </button>
                  <button>
                    <img src={require("../assets/images/repost.png")} alt="" />
                    <span>Repost</span>
                  </button>
                  <button>
                    <img src={require("../assets/images/send.png")} alt="" />
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}
        </Content>
      )}
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  background-color: #000000;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 70%), 0 0 0 rgba(0 0 0 /50%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  background: #000000;

  div {
    button {
      color: #c4c4c4;
      display: flex;
      align-items: center;
      outline: none;
      background: transparent;
      font-size: 14px;
      min-height: 48px;
      font-weight: 600;
      line-height: 1.5px;
      border: none;
      transition: all 170ms ease-in-out;
      cursor: pointer;
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
        flex-grow: 1;
        margin: 4px 0;
        padding-left: 16px;
        border-radius: 47px;
        background-color: #22232b;

        &:hover {
          background-color: #202132;
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      padding-bottom: 4px;
      flex-wrap: wrap;

      button {
        img {
          margin: 0 8px 0 -2px;
        }

        span {
          margin-top: 3px;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.06);
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 12px;
  overflow: visible;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  padding: 12px 16px 0;

  a {
    display: flex;
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
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

        &:nth-child(n + 1) {
          font-size: 12px;
          color: #c4c4c4;
        }
        &:nth-child(1) {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
      }
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    margin-top: -10px;
  }
`;

const Description = styled.div`
  text-align: left;
  font-size: 14px;
  color: #fff;
  padding: 0 16px;
  overflow: hidden;
`;

const SharedImage = styled.div`
  position: relative;
  display: block;
  background-color: #000;
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
  border-bottom: 1px solid #161722;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      img {
        width: 16px;

        &:first-child {
          margin-top: 1.2px;
        }
      }
      span {
        margin-left: 5px;
        margin-top: 1px;
      }

      color: #c4c4c4;
      display: flex;
      background: transparent;
      border: none;

      &:hover {
        color: #1f80e2;
        text-decoration: underline;
      }
    }

    a {
      color: #c4c4c4;
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
    img {
      width: 18px;
      margin-right: 8px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: #fff;
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
      background-color: #202132;
    }
  }
`;

const LoadingBox = styled(CommonCard)`
  text-align: center;
  & > img {
    padding: 5px;
    width: 30px;
    filter: invert(100%);
  }
`;

const Content = styled.div``;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
