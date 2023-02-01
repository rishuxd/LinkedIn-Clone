import styled from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState();

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/Images/close-icon.svg" alt="" />
              </button>
            </Header>

            <SharedContent>
              <UserInfo>
                <img src="/Images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="Write your text here !"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>

            <ShareCreate>
              <AttachAssets>
                <AssetButton>
                  <img src="/Images/photo-icon.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/Images/video-icon.svg" alt="" />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <img src="/Images/event-icon.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false}>
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
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
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
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
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
  border-left: 1px soild rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  border: none;
  padding-right: 16px;
  padding-left: 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.09)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
  border-radius: 20px;
  min-width: 60px;

  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.09)" : "#004182")};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 16px;
  }
`;

export default PostModal;