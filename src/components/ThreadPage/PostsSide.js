import styled from "styled-components";
import Title from "../Title";

const PostsArea = styled.div`
  width: 100%;
  margin-top: 64px;
`;

const PostStyle = styled.p`
  width: 80%;
  max-width: 800px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  padding: 32px 64px;
  margin: 22px auto;
`;

const PostsSide = ({ title, posts }) => {
  return (
    <>
      <Title title={title} />
      <PostsArea>
        {posts.posts?.map(post => (
          <PostStyle key={post.id}>{post.post}</PostStyle>
        ))}
      </PostsArea>
    </>
  );
};

export default PostsSide;