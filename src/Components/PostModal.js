import styled from "styled-components";

const PostModal = (props) => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <img src="/Images/close-icon.svg" alt="" />
          </button>
        </Header>

        <SharedContent>
          <UserInfo>
            <img src="/Images/user.svg" alt="" />
            <span>Name</span>
          </UserInfo>
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

          <PostButton>Post</PostButton>
        </ShareCreate>
      </Content>
    </Container>
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
    svg {
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
  background: #0a66c2;
  color: white;
  border-radius: 20px;
  min-width: 60px;

  &:hover {
    background: #004182;
  }
`;

export default PostModal;
