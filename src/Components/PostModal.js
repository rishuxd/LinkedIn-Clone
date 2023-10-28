import styled from "styled-components";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../Actions";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`Not an image, the file is of type ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <img
                src={require("../assets/images/close.png")}
                onClick={(event) => reset(event)}
                alt="close"
              />
            </Header>

            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="user" />
                ) : (
                  <img src={require("../assets/images/user.svg")} alt="user" />
                )}

                <span>{props.user.displayName}</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="Write your text here!"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/png, video/mp4"
                      name="image"
                      id="file"
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    <ImageInput>
                      <label htmlFor="file">
                        Click here to select an image.
                      </label>
                    </ImageInput>
                    {shareImage && (
                      <img
                        src={URL.createObjectURL(shareImage)}
                        alt="sharedImg"
                      />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <VideoInput>
                      <input
                        type="text"
                        placeholder="Input a video link."
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </VideoInput>
                  )
                )}
              </Editor>
            </SharedContent>

            <ShareCreate>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src={require("../assets/images/img.png")} alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img
                    src={require("../assets/images/video.png")}
                    alt="video"
                  />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <img src={require("../assets/images/event.png")} alt="" />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                Post
              </PostButton>
            </ShareCreate>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  max-width: 552px;
  background-color: #161722;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid #000;
  font-size: 16px;
  line-height: 1.5;
  color: #c4c4c4;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 16px;
    cursor: pointer;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 8px 12px;
  background: transparent;
  vertical-align: baseline;
  overflow-y: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  span {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 10px;
  }
`;

const ShareCreate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: #c4c4c4;
  cursor: pointer;

  span {
    margin-left: 5px;
    font-size: 12px;
    margin-top: 2px;
  }
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;

  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  border: none;
  padding-right: 16px;
  padding-left: 16px;
  background: ${(props) =>
    props.disabled ? "rgba(10,102,194, 0.6)" : "#0a66c2"};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.4)" : "#c4c4c4")};
  border-radius: 20px;
  min-width: 60px;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.disabled ? "rgba(10,102,194, 0.6)" : "#004182"};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    box-sizing: border-box;
    background-color: #202132;
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 16px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #000;
    color: #fff;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  color: #c4c4c4;
  img,
  video {
    width: 100%;
  }
`;

const VideoInput = styled.div`
  input {
    box-sizing: border-box;
    background-color: #202132;
    width: 100%;
    min-height: 10px;
    font-size: 12px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #000;
    color: #fff;
  }
`;

const ImageInput = styled.div`
  box-sizing: border-box;
  background-color: #202132;
  width: 100%;
  min-height: 10px;
  font-size: 12px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000;
  color: #c4c4c4;

  &:hover {
    background-color: #1b1b2a;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
